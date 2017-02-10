const Todo = require('../models/todo')

// create a new TODO and console log the response
function create (params) {
  Todo.create((params), function (err, createdTodo) {
    if (err) {
      console.error(err)
      return
    }
    console.log(createdTodo)
  })
}

// console log the list of all TODOs
function list () {
  Todo.find({}, function (err, listedTodo) {
    if (err) {
      console.error(err)
      return
    }
    console.log(listedTodo)
  })
}

// find the TODO with this id and console log it
function show (id) {
  Todo.findById((id), function (err, showedTodo) {
    if (err) {
      console.error(err)
      return
    }
    if (showedTodo) {
      console.log(showedTodo)
    } else {
      console.log('ID not valid')
    }
  })
}

// find the TODO with this id and update it's params. console log the result.
function update (id, params) {
  Todo.findByIdAndUpdate((id), (params), {new: true}, function (err, updatedTodo) {
    if (err) {
      console.error(err)
      return
    }
    if (updatedTodo) {
      console.log(updatedTodo)
    } else {
      console.log('ID not valid')
    }
  })
}

// find the TODO with this id and destroy it. console log success/failure.
function destroy (id) {
  Todo.findByIdAndRemove((id), function (err, destroyedTodo) {
    if (err) {
      console.log('failure')
      return
    }
    if (destroyedTodo) {
      console.log('success')
      console.log(destroyedTodo)
    } else {
      console.log('ID not valid')
    }
  })
}

function destroyAll () {
  Todo.remove({}, function (err, allDestroyedTodos) {
    if (err) {
      console.error(err)
      return
    }
    console.log('All todos removed')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
