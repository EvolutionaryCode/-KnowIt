const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WhitlistedList = new Schema({ name: String })
var BlacklistedList = new Schema({ name: String })
let TaskSchema = new Schema({
  Type: {
    type: String,
    required: true
  },
  Taskname: {
    type: String,
    required: true
  },
  Taskquestions: {
    QuestionsList: [QuestionIDs],
    
  }
})

const User = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks
