// This runs the Routing for the API Servies
const express = require('express')
const router = express.Router()
// Possible Routes that are used
// require('./routes/')(router)
require('./routes/r_user')(router)
require('./routes/r_tasks')(router)

module.exports = router
