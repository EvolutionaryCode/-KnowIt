const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WhitlistedList = new Schema({ name: String })
var BlacklistedList = new Schema({ name: String })
var AnswerList = new Schema({ name: String })
var Questions = new Schema({
  QuestionType: {
    type: String,
    required: true
  },
  Question: {
    type: String,
    required: true,
  Answers: {
    PossibleAnswers: [AnswerList],
    Correctanswer: {
      type: string,
      required: true
    }
  }
  }
})
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
    QuestionsList: [Questions],
  }
})

const User = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks
