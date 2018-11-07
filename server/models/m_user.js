const mongoose = require('mongoose')
const Schema = mongoose.Schema

var JoinedClasses = new Schema({ name: String })
var ParentIDs = new Schema({ name: String })
let userSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Userlevel: {
    type: String,
    required: true,
    default: 'user'
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  inclass: {
    type: Boolean,
    default: false,
    Classes: {
      JoinedClassIDs: [JoinedClasses],
      required: false
    }
  },
  parentsset: {
    type: Boolean,
    default: false,
    Parents: {
      ParentUserIDs: [ParentIDs],
      required: false
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
