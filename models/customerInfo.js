const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const billingInfo = require('./billingInfo');
const shippingInfo = require('./shippingInfo');
const paymentInfo = require('./paymentInfo');

const customerInfoSchema = new Schema({
    billingInfo: [billingInfo],
    shippingInfo: [shippingInfo],
    paymentInfo:[paymentInfo]
},{
    timestamps:true
});


const customerInfo = mongoose.model('customerInfo', customerInfoSchema);
//example
customerInfo.create({
    billingInfo: {
        firstName: "Brian",
        lastName: "Holt",
        email:'bharrisonholt@gmail.com',
        phone:8643535901,
        address: "232 Pear Lane",
        city: "Wenatchee",
        state: "WA",
        zipCode: 98801,
    },
    shippingInfo:{
        firstName: "Brian",
        lastName: "Holt",
        address: "232 Pear Lane",
        city: "Wenatchee",
        state: "WA",
        zipCode: 98801,
    },
    paymentInfo:{
        cardType:'Credit',
        name:'Brian Holt',
        number: "1234123412341234",
        exp:1021,
        cvv:123
    }
})
module.exports = customerInfo;