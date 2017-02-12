// For original js file, refer to todos_controller.js

// require Express, set Port
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

// require Mongoose, connect to DB
const mongoose = require('mongoose')
mongoose.connect('mmongodb://jonathanlimes:iamusingthisformymlabproject@ds149069.mlab.com:49069/tododb')
mongoose.Promise = global.Promise

// inherit the Schema
const Todo = require('../models/todo')

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
    response.render('./todos/index', {
      allTodos: output
    })
  })
})

// function list () {
//   Todo.find({}, function (err, listedTodo) {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(listedTodo)
//   })
// }

// show: show Todo by Id
app.get('/movies/:todoId', function(request, response) {
  Todo.findOne({todoId: request.params.todoId}, function (err, returnedTodo) {
    if (err) {
      console.error(err)
      return
    }
    response.render('./movies/show', {
      todo: returnedTodo
    })
  })
})

// function show (id) {
//   Todo.findById((id), function (err, showedTodo) {
//     if (err) {
//       console.error(err)
//       return
//     }
//     if (showedTodo) {
//       console.log(showedTodo)
//     } else {
//       console.log('ID not valid')
//     }
//   })
// }

// Default app listener
app.listen(port, function () {
  console.log('Express Test is running on ' + port)
})
