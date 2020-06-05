const express = require('express');
const bodyParser = require('body-parser');
const users=['brian']

const userRouter = express.Router();

userRouter.use(bodyParser.json())

userRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req,res) => {
    res.send(`Sending the users: ${users}`)
    res.end('Retrieved the users from the server')
})
.post((req,res) => {
    let user = req.body.user;
    users.push(user)
    res.end(`Will add you as a user: ${user}, here you are: ${users}`)
})
.put((req,res) => {
    res.statusCode= 403;
    res.end('Editing not supported on this feature')
})
.delete((req,res) => {
    res.end(`Deleting all user accounts`)
})
userRouter.route('/:userId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res) => {
    res.end(`Sending user account details: ${req.params.userId} to you`)
})
.post((req,res) => {
    res.end(`POST operations not supported on /users/${req.params.userId}`)
})
.put((req, res) => {
    let user = req.body.user;
    res.end(`Will updated user account with: ${user}`)
})
.delete((req,res) => {
    res.end(`Deleting user account: ${req.params.userId}`)
});
module.exports = userRouter;