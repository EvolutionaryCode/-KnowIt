const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WhitlistedList = new Schema({ name: String })
var BlacklistedList = new Schema({ name: String })
let TaskSchema = new Schema({