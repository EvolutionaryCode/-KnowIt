const mongoose = require('mongoose')
const Schema = mongoose.Schema

let LogsSchema = new Schema({
  LogType: {
    type: String
  },
  UserID: {
    type: String, 
    required:true
  },
  RequstedAction: {
    type: String
  },
  SysResponse: {
    type: String
  },
  LogLevel: {
    type: String
  },
  timestamp : {
    type: Date, 
    default: Date.now }
})

const User = mongoose.model('Logs', logsSchema)

module.exports = Logs
