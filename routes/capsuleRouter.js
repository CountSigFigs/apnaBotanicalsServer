const express = require('express');
const bodyParser = require('body-parser');

const capsuleRouter = express.Router();

capsuleRouter.use(bodyParser.json())

capsuleRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req,res) => {
    res.end('Will send the capsule inventory to you')
})
.post((req,res) => {
    res.end('Will add the capsule item to the inventory')
})
.put((req,res) => {
    res.end('Will update the capsule inventory')
})
.delete((req,res) => {
    res.end('Deleting the capsule inventory')
})

module.exports = capsuleRouter;
