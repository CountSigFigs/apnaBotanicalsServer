const express = require('express');
const bodyParser = require('body-parser');
const Capsule = require('../models/capsules');

const capsuleRouter = express.Router();

capsuleRouter.use(bodyParser.json())

capsuleRouter.route('/')
.get((req,res,next) => {
    Capsule.find()
    .then(capsules => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(capsules)
    })
    .catch(err => next(err))
})
.post((req,res,next) => {
    Capsule.create(req.body)
    .then(capsule => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(capsule)
    })
    .catch(err => next(err))
})
.put((req,res) => {
    res.status = 403
    res.end('PUT is not supported on /capsule')
})
.delete((req,res,next) => {
    Capsule.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response)
    })
    .catch(err => next(err))
});

module.exports = capsuleRouter;
