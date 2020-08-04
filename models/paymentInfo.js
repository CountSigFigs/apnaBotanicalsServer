const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentInfo = new Schema({
    cardType:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    exp:{
        type: Number,
        required: true
    },
    cvv:{
        type: Number,
        required: true
    }
});

module.exports = paymentInfo;