const express = require('express');
const bodyParser = require('body-parser');
const Powder = require('../models/powders');
const powderRouter = express.Router();
const Capsule = require('../models/capsules');

powderRouter.use(bodyParser.json())

powderRouter.route('/')
.get((req,res,next) => {
    Capsule.find({type:'Powder'})
    .then(powders => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(powders)
    })
    .catch(err => next(err))
})
.post((req,res,next) => {
    Powder.create(req.body)
    .then(powder => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(powder)
    })
    .catch(err => next(err))
})
.put((req,res) => {
    res.status = 403
    res.end('PUT is not supported on /powders')
})
.delete((req,res,next) => {
    Powder.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response)
    })
    .catch(err => next(err))
});

module.exports = powderRouter;