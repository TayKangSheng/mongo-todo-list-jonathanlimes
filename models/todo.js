// Mongoose Schema and Models goes here
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5
  },
  description: {
    type: String,
    default: 'I love descriptions!'
  },
  completed: {
    type: Boolean,
    default: false
  }
})

// Non-relational database, so upon the validation that is quickest to finish, it will return first.
// I.e. you might get 'completed' as a field first before name and description

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
