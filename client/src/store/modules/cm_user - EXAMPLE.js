import bcrypt from 'bcryptjs'
const salt

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
    loginError: state => state.loginError
  }
  
    const actions = {
    async loadUserProfile ({ commit }) {
      // get the user object for the currently logged in user...
      await Vue.axios.get('/user/' + this.userId)
        .then((resp) => {
          let data = resp.data
          console.log('loadUserProfile data:', data)
        })
    },
    updateUserProfile ({ commit }, payload) {
      // TODO: encrypt the user's password
      bcrypt.hash(payload.password, 8, (err, hash) => {
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
  }
  
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
  