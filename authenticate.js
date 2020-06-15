const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const CustomerInfo = require('./models/customerInfo');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const config = require('./config');

exports.local = passport.use(new LocalStrategy(CustomerInfo.authenticate()));
passport.serializeUser(CustomerInfo.serializeUser());
passport.deserializeUser(CustomerInfo.deserializeUser());

exports.getToken = function(user){
    return jwt.sign(user, config.secretKey, {expiresIn:3600});
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;
exports.jwtPassport = passport.use(
    new JwtStrategy(
        opts,
        (jwt_payload, done) => {
            CustomerInfo.findOne({_id: jwt_payload}, (err, user) => {
                if (err){
                    return done(err,false);
                } else if (user){
                    return done(null, user);
                } else {
                    return done(null, false)
                }
            })
        }
    )
);
exports.verifyUser = passport.authenticate('jwt', {session: false});
