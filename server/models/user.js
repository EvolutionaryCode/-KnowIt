const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Userlevel: {
    type: String, 
    required: true, 
    default: user
  },
  first: {
    type: String, 
    required: true
  },
  last: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true
  },
  isActive: {
    type: Boolean, 
    default: true
  },
  PatronId: {
    type: String
  },
  createdOn: {
    type: Date, 
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
