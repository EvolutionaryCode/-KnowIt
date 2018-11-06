const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TaskSchema = new Schema({
  Type: {
      type: String, 
      required: true
    },
  Taskname: {
      type: String,
      required: true
    },
  Questions: {
   qid: {
      type: Number,
      required: true
    },
   qtype: {
      type: String,
      required: true
    },
   qpossible: {
        type: String,
        required: true
    },
   qpossible: {
        type: [QuestionsPossible],
        default: undefined
    },
    qanswer: {
        type: String,
        required: true
    },
    qccv: {
        type: String,
    }
  }, //End of Questions Nested Schema
  Settings: {
    Taskclass: {
        type: String,
        required: false
      },
    TaskTimmed: {
        type: Boolean,
        required: true,
        default: true,
        StartTime: {
            Type: Date,
            required: false
        },
        LockTime: {
            Type: Date,
            required: false
        }
      },//End of Task Timmed
    CreatedTime: {
        Type: Date,
        required: true
    },
    Live: {
        type: Boolean,
        required: true,
        default: false,
        JoinCode:

    },//End Of Live Section
  }, //End Of Settings
})

const User = mongoose.model('Tasks', tasksSchema)

module.exports = Logs
