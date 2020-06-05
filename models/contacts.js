const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    feedback:{
        type: String,
        require:true
    }
},{
    timestamps:true
});

const Contact = mongoose.model('Contact', contactSchema);
Contact.create({name:'Brian', phone:86435391, email:'bharrisonholt@gmail.com', feedback:'I have question about the health risks. Please contact me.'})

module.exports = Contact;
