// startup app.js

// TO START AN EXPRESS SERVER:
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://jonathanlimes:iamusingthisformymlabproject@ds149069.mlab.com:49069/tododb')
// mongoose.connect('mongodb://localhost/mongo-todo-list')
mongoose.Promise = global.Promise

const todoController = require ('./controllers/todoController')
const bodyParser = require('body-parser') // to request for POST data

// startup API MIDDLEWARE, all req go to /startups, goes to designated controller
app.use(bodyParser.json())
app.use('/todos', todoController)

// TO LISTEN IN TO A PORT. PUT THIS AT THE BOTTOM OF EVERYTHING
const port = 4000
app.listen(port, function () {
  console.log('Middleware test is running on port ' + port)
})
