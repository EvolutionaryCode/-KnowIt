const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('../config')

app.set('port', (process.env.PORT || (config.APIport)))
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
// Get Config From Config File
const options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: 100, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(config.Monogo)
const db = mongoose.connection

// Get Config For API Console Responses

db.on('error', console.error.bind(console, (config.APIResponseConsoleLog.MDBFailure)))
db.once('open', function () {
  console.log((config.APIResponseConsoleLog.MDBSuccess))

  app.listen(app.get('port'), function () {
    console.log((config.APIResponseConsoleLog.APIConsoleLogSuccess))
  })
})
