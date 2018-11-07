const User = require('../../models/m_user')
const config = require("../../../config");

module.exports = function (router) {
  router.get('/user/:id', function (req, res) {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: ('config.ServerUserRouteResponses.FailureFindUserUsingUserID'),
          error: err
        }))
  })

  router.get('/user/email/:email', function (req, res) {
    User.find({ 'email': req.params.email }).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: ('config.ServerUserRouteResponses.FailureFindUserUsingUserEmail'),
          error: err
        }))
  })

  router.post('/user', function (req, res) {
    let user = new User(req.body)
    user.save(function (err, user) {
      if (err) return console.log(err)
      res.status(200).json(user)
    })
  })

  // Update user document...
  router.put('/user/:id', function (req, res) {
    let qry = { _id: req.params.id }
    let doc = {
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
      isActive: req.body.isActive
    }
    User.update(qry, doc, function (err, respRaw) {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })

   // Creating user document...
   router.put('/user/new/account', function (req, res){
    let doc = {
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
      isActive: true
    }
    User.post(doc, function (err, respRaw) {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
} //End Routing Here
