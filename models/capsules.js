const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const capsules = require('../shared/capsulesList');

const capsuleSchema = new Schema({
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
    collection: 'inventory'
});

const Capsule = mongoose.model('capusles', capsuleSchema);

module.exports = Capsule;