import bcrypt from 'bcryptjs'
const config = require('../../../../config')
const saltRounds = config.SecuritySettings.bcrypthash;
const state = {
    email: '',
    userId: null,
    first: '',
    last: '',
    isLoggedIn: false,
    loginError: ''
  }

  const getters = {
    isLoggedIn: state => state.isLoggedIn,
    userId: state => state.userId,
    loginError: state => state.loginError,
    registerError: state => state.registerError
  }

const actions = {
    async logInUser ({ commit }, payload) {
      await Vue.axios.get('/user/email/' + payload.email)
        .then((resp) => {
        let data = resp.data
        if (data && data.length > 0) {
      bcrypt.compare(payload.password, user.password, function (err, result) {
        if (result == true){
            payload.userId = data[0]._id
            commit('logInUser', payload)
            //What to do if the Requested Password Matches The BCrypt Password
        } else {
            commit('loginError')
        }
      }) // end of Bcrypt Check
    }   
    })
    .catch(() => {
      commit('loginError')
    })
},
    async loadUserProfile ({ commit }) {
    // get the user object for the currently logged in user...
    await Vue.axios.get('/user/' + this.userId)
      .then((resp) => {
        let data = resp.data
        console.log('loadUserProfile data:', data)
      })
},
    createUserProfile({ commit }, payload) {
        // encrypt the user's password
        bcrypt.hash(payload.password, config.saltRounds, (err, hash) => {
            if (!err) {
              payload.password = hash
              console.log('password hash: ', payload.password)
              Vue.axios.put('/user/' + this.state.user.userId, payload)
                .then((resp) => {
                  console.log(resp)
                })
                .catch((err) => {
                  console.log(err)
                })
            }
        })
    }
}//end Of Const Actions

const mutations = {
  logInUser (state, payload) {
    state.isLoggedIn = true
    state.email = payload.email
    state.first = payload.first
    state.last = payload.last
    state.userId = payload.userId
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or Password are invalid. Login failed.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
