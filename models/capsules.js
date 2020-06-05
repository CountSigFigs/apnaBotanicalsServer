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
    },
    quanity:{
        type: Number
    }
},{
    timestamps:true
});

const Capsule = mongoose.model('Capsule', capsuleSchema);

Capsule.create({
    name: 'Kratom Gold',
    type: 'Capsule',
    image: 'assets/images/gold-c.png',
    description: 'Calming and Soothing',
    price: 10,
    quanity:1
})

module.exports = Capsule;