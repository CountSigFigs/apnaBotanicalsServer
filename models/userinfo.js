const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require: true
    }
},{
    timestamps:true
});

const userInfo = mongoose.model('userinfo', userInfoSchema);
module.exports = userInfoSchema;
