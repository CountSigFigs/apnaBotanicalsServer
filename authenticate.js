const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const CustomerInfo = require('./models/customerInfo');

exports.local = passport.use(new LocalStrategy(CustomerInfo.authenticate()));
passport.serializeUser(CustomerInfo.serializeUser());
passport.deserializeUser(CustomerInfo.deserializeUser());