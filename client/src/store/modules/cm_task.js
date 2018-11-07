import Vue from 'vue'

const state = {
    userId: null,
    first: '',
    last: '',
    isLoggedIn: false,
    loginError: ''
  }

  const getters = {
    isLoggedIn: state => state.isLoggedIn,
    userId: state => state.userId,
  }
