const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
  task: {
    type: String
  },
  date: {
    type: Date
  },
  label: {
    type: String
  },
  status: {
      type: String
  }
}, {
    collection: 'todos'
})

module.exports = mongoose.model('ToDo', ToDoSchema)
