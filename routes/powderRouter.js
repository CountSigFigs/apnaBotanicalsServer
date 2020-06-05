const express = require('express');
const bodyParser = require('body-parser');

const powderRouter = express.Router();

powderRouter.use(bodyParser.json())

powderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req,res) => {
    res.end('Will send the powder inventory to you')
})
.post((req,res) => {
    res.end('Will add the powder item to the inventory')
})
.put((req,res) => {
    res.end('Will update the powder inventory')
})
.delete((req,res) => {
    res.end('Deleting the powder inventory')
})

module.exports = powderRouter;