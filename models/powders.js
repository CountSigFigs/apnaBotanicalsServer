const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const powderList = require('../shared/powders');

const powderSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    image:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require:true
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

const Powder = mongoose.model('Powder', powderSchema);

//Powder.create(powderList)

module.exports = Powder;