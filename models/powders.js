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
});

const Powder = mongoose.model('inventory', powderSchema);

//Powder.create(powderList)

module.exports = Powder;