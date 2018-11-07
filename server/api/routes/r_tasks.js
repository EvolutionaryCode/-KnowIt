const User = require('../../models/m_tasks')
const config = require("../config");

//Creating & Grabbing Tasks Data By ID
module.exports = function (router) {
  router.get('/tasks/:id', function (req, res) {
    Tasks.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: ('config.ServerTaskRouteResponses.FailureFindTaskUsingTaskID'),
          error: err
        }))
  }) //How to get the task Info Using MongoDB _Id from the API

  router.get('/tasks/live/', function (req, res) {
    User.find({ 'Live': true }).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: ('config.ServerTaskRouteResponses.FailureFindTaskSortLive'),
          error: err
        }))
  })//How to get the Live GHames that are active by searching through Tasks Database

  router.post('/tasks/new', function (req, res) {
    let task = new Task(req.body)
    Tasks.save(function (err, Tasks) {
      if (err) return console.log(err)
      res.status(200).json(Tasks)
    })
  }) //How to create a new Task & Assign the task to User Who Is Logged In

} //End Routing Here
