const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
},{
    collection: 'inventory'
});

const Capsule = mongoose.model('Inventory', capsuleSchema);
//Capsule.create(capsules)

module.exports = Capsule;