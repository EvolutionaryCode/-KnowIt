const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require("../config");

app.set('port', (process.env.PORT || (config.db.APIport)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

const mongoose = require('mongoose')
//Get Config From Config File
const MongoDatabase = config.database.db
const MongoDBUsername = config.database.username
const MongoDBPassword = config.database.password
mongoose.connect('mongodb://(MongoDBUsername):(MongoDBPassword)@(MongoDatabase)')
const db = mongoose.connection

//Get Config For API Console Responses

db.on('error', console.error.bind(console, ('config.APIResponseConsoleLog.MDBFailure')))
db.once('open', function () {
  console.log(('config.APIResponseConsoleLog.MDBSuccess'))

  app.listen(app.get('port'), function () {
    console.log(('config.APIResponseConsoleLog.APIConsoleLogSuccess'))
  })
})