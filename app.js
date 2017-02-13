// For original js file, refer to todos_controller.js

// require Express, set Port
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

// require Mongoose, connect to DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://jonathanlimes:iamusingthisformymlabproject@ds149069.mlab.com:49069/tododb')
// mongoose.connect('mongodb://localhost/mongo-todo-list')
mongoose.Promise = global.Promise

// inherit the Schema
const Todo = require('./models/todo')

// set view engine to be EJS
app.set('view engine', 'ejs')

// RESTful routes from todo in MongoDB

// index: show list of all Todos
app.get('/todos', function (request, response) {
  var condition = {}
  var sortCondition = {}
  var query = Todo.find(condition) // empty obj means find everything
  Todo.find({}, function (err, output) {
    // change the above to var condition when you get the hang of it
    if (err) {
      console.error(err)
      return
    }
    // To provide a RESPONSE to the VIEWS, you need to RENDER the page here + pass data to the EJS.
    // response.render('./todos/index', {
    //   allTodos: output
    // })
    response.send('output')
  })
})

// show: show Todo by Id
app.get('/todos/:todoId', function(request, response) {
  Todo.findOne({_id: request.params.todoId}, function (err, returnedTodo) {
    if (err) {
      console.error(err)
      return
    }
    // response.render('./todos/show', {
    //   todo: returnedTodo
    // })
    response.send(returnedTodo)
  })
})



// Default app listener
app.listen(port, function () {
  console.log('Express Test is running on ' + port)
})
