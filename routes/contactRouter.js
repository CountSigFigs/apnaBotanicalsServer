const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('../models/contacts');
const contactRouter = express.Router();

contactRouter.use(bodyParser.json())

contactRouter.route('/')
.get((req,res,next) => {
    Contact.find()
    .then(contacts => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contacts)
    })
    .catch(err => next(err))
})
.post((req,res,next) => {
    Contact.create(req.body)
    .then(contact => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(contact)
    })
    .catch(err => next(err))
})
.put((req,res) => {
    res.status = 403
    res.end('PUT is not supported on /contact')
})
.delete((req,res,next) => {
    Contact.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response)
    })
    .catch(err => next(err))
});


/* contactRouter.route('/:contactId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res) => {
    res.end(`Will send details of the review: ${req.params.contactId} to you`)
})
.post((req,res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /contacts/${req.params.contactId}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Once you provided your contact info you cannot go back and edit it.`)
})
.delete((req,res) => {
    res.end(`Deleting contact: ${req.params.contactId}`)
}); */

module.exports = contactRouter;