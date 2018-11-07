const mongoose = require('mongoose')
const Schema = mongoose.Schema

var QuestionsPossible = new Schema({ name: String })
let QuestionSchema = new Schema({
    qid: {
      type: String,
      required: true
    },
    qtype: {
      type: String,
      required: true
    },
    qpossible: {
      QuestionsList: [QuestionsPossible],
      required: false,
    },
    qanswer: {
      type: String,
      required: true
    },
    qcommoncore: {
      type: String
    }
  } // End of Questions Nested Schema
)

const User = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks
