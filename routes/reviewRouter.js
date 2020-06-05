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
//shift alt a
/* reviewRouter.route('/:reviewId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res) => {
    res.end(`Will send details of the review: ${req.params.reviewId} to you`)
})
.post((req,res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /reviews/${req.params.reviewId}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Once a review has been posted you cannot go back and edit it.`)
})
.delete((req,res) => {
    res.end(`Deleting review: ${req.params.reviewId}`)
}); */

module.exports = reviewRouter;