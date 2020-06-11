const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const billingInfo = require('./billingInfo');
const shippingInfo = require('./shippingInfo');
const paymentInfo = require('./paymentInfo');
const orderSummary = require('./order');
const userInfo = require('./userinfo');
const passportLocalMongoose = require('passport-local-mongoose');

const customerInfoSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    billingInfo: [billingInfo],
    shippingInfo: [shippingInfo],
    paymentInfo:[paymentInfo],
    orders:[orderSummary]
},{
    timestamps:true
});

customerInfoSchema.plugin(passportLocalMongoose);

const customerInfo = mongoose.model('customerInfo', customerInfoSchema);

//example


module.exports = customerInfo;