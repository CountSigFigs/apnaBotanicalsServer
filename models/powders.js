const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

Powder.create({
    name: 'Kratom Gold',
    type: 'Powder',
    image: 'assets/images/gold-c.png',
    description: 'Calming and Soothing',
    price: 10,
    quanity:1
})

module.exports = Powder;