const express = require('express');
const bodyParser = require('body-parser');
const Review = require('../models/reviews')
const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json())

reviewRouter.route('/')
.get((req,res,next) => {
    Review.find()
    .then(reviews => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reviews)
    })
    .catch(err => next(err))
})
.post((req, res, next) => {
    Review.create(req.body)
    .then(review => {
        console.log('Review created ', review);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(review)
    })
    .catch(err => next(err))
})
.put((req,res) => {
    res.statusCode = 403;
    res.end('PUT operations not supported on reviews')
})
.delete((req,res,next) => {
    Review.deleteMany()
    .then(response =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
})
reviewRouter.route('/:reviewId')
.get((req,res, next) => {
    Review.findById(req.params.customerId)
    .then(review => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(review);
    })
    .catch(err => next(err))
})
.post((req,res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /reviews/${req.params.reviewId}`)
})
.put((req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {
        $set: req.body
    }, { new: true})
    .then(review => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(review)
    })
    .catch(err => next(err))
})
.delete((req,res, next) => {
    Review.findByIdAndDelete(req.params.reviewId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response)
    })
    .catch(err => next(err))
});

module.exports = reviewRouter;