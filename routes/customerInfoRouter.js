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

customerInfoRouter.route('/:customerId')
.get((req,res, next) => {
    CustomerInfo.findById(req.params.customerId)
    .then(customerInfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customerInfo);
    })
    .catch(err => next(err))
})
.post((req,res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /customers/${req.params.customerId}`)
})
.put((req, res, next) => {
    CustomerInfo.findByIdAndUpdate(req.params.customerId, {
        $set: req.body
    }, { new: true})
    .then(customerInfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customerInfo)
    })
    .catch(err => next(err))
})
.delete((req,res, next) => {
    CustomerInfo.findByIdAndDelete(req.params.customerId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response)
    })
    .catch(err => next(err))
});

customerInfoRouter.route('/:customerId/orders')
.get((req, res, next) => {
    CustomerInfo.findById(req.params.customerId)
    .then(customer => {
        if (customer){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customer.orders);
        } else{
            err = new Error(`Customer ${req.params.customerId} not found`)
            err.status = 404;
            return next(err)
        }
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    CustomerInfo.findById(req.params.customerId)
    .then(customer => {
        if (customer){
            customer.orders.push(req.body);
            customer.save()
            .then(customer =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(customer);
            })
            .catch(err => next(err));
        } else {
            err = new Error(`Customer ${req.params.customerId} not found`)
            err.status = 404;
            return next(err)
        }
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /customers/${req.params.customerId}/orders`);
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end(`Delete options not supported on /customers/${req.params.customerId}/orders`)
});

module.exports = customerInfoRouter;

