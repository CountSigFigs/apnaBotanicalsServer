const express = require('express');
const bodyParser = require('body-parser');
const CustomerInfo = require('../models/customerInfo');
const customerInfoRouter = express.Router();

customerInfoRouter.use(bodyParser.json())

customerInfoRouter.route('/')
.get((req,res,next) => {
    CustomerInfo.find()
    .then(customers => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customers)
    })
    .catch(err => next(err))
})
.post((req,res,next) => {
        CustomerInfo.create(req.body)
        .then(customer => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json');
            res.json(customer)
        })
        .catch(err => next(err))
})
.put((req,res) => {
    res.status = 403
    res.end('PUT is not supported on /customers')
})
.delete((req,res,next) => {
    CustomerInfo.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response)
    })
    .catch(err => next(err))
});


module.exports = customerInfoRouter;

