const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TaskResponses = new Schema({
  Question: {
    Question: String,
    StudentAnswer: String,
    Correctanswer: Boolean,
  }
})
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
      type: String,
      required: true
    }
  },
  qcommoncore: {
    type: String
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
  },
  Taskresponses : {
    Responses: [TaskResponses]
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
