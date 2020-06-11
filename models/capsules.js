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
    timestamps:true
});

const Capsule = mongoose.model('Capsule', capsuleSchema);
//Capsule.create(capsules)

module.exports = Capsule;