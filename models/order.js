const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    quanity:{
        type: Number
    }
},{
    timestamps:true
});

const orderSummary = new Schema({
    order: [itemSchema],
    price:{
        type: Number,
        required: true,
    },
    taxes:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
})

module.exports = orderSummary;