const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingInfo = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipCode:{
        type: Number,
        required: true
    }
});

module.exports = shippingInfo;
