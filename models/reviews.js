const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    body:{
        type: String,
        require: true
    }
},{
    timestamps:true
});

const Review = mongoose.model('Review', reviewSchema);
//Review.create({title:'Awesome Products',name:'Johnny',body:'Since using ABs products, I have had less stress!'})
module.exports = Review
