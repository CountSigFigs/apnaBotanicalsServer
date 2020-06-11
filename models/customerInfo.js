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
customerInfo.create({
    userInfo:{
        name: 'brian holt',
        username:'countsigfigs',
        password:'murphy864'
    },
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
    },
    orders:[{
        order:[{name:'kratom', type:'capsule', price:10, quanity:2}],
        price: 45,
        taxes:2,
        total:47
    },{
        order:[
            {name: 'kratom', type: 'power', price:10, quanity:3},
            {name:'kratom yellow', type: 'capsule', price:10, quanity:1}],
            price: 40,
            taxes:3,
            total:48
    }]
})

module.exports = customerInfo;