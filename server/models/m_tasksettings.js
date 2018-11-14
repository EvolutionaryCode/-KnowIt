const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WhitlistedList = new Schema({ name: String })
var BlacklistedList = new Schema({ name: String })
let TaskSettingsSchema = new Schema({
        Taskclass: {
          type: String,
          required: false
        },
        TaskStartTime: {
            Type: Date,
            required: false
        },
        TaskLockTime: {
            Type: Date,
            required: false
        },
        CreatedTime: {
          Type: Date,
          required: true
        },
        LiveEnabled: {
          type: Boolean,
          required: true,
          default: false
        },
        LiveJoinCode: {
            Type: String,
            required: false
        },
        LiveQRCode: {
            Type: String,
            required: false
        },
        LimitsEnabled: {
            type: Boolean,
            required: true,
            default: false
        },
        WhitelistedSite: {
            WhitelistedSites: [WhitlistedList],
            required: false
        },
        BlacklistedSite: {
            BlacklistedSites: [BlacklistedList],
            required: false
        },
        OpenNoteEnabled: {
            type: Boolean,
            required: true,
            default: false
        },
        OpenNoteStarttime: {
              type: Date,
              required: false
        },
        OpenNoteEndtime: {
              type: Date,
              required: false
        }
    })// End of Task Settings\
    const Task = mongoose.model('TaskSettings', TaskSettingsSchema)

    module.exports = TaskSettings