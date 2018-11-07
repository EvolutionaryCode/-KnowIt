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
    qcommoncore: {
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
        JoinCode: {
            Type: String,
            required: true
        },
        QRCode: {
            Type: String,
            required: true
        }
    },//End Of Live Section
    Limits: {
        type: Boolean,
        required: true,
        default: false,
        WhitelistedSite: {
            type: [WhitlistedWebsites],
            required: false,
        },
        BlacklistedSite: {
            type: [BlacklistedWebsites],
            required: false,
        },
        OpenNoteLimits: {
            type: Boolean,
            required: false,
            default: false,
            Starttime: {
                type: Date,
                required: false  
            },
            Endtime: {
                type: Date,
                required: false
            }
        }//End OpenNoteLimits
    }, //End Of Limits
  }, //End Of Settings
})

const User = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks
