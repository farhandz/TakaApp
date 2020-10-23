import Vue from 'vue'
import Vuex from 'vuex'
import Dashboard from './Dashboard'
import Register from './Register'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null
  },
  getters: {
    islogin (state) {
      if (state.token !== null) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {},
  actions: {
    actionLogin ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_API}/user/login`, payload)
          .then(res => {
            if (res.data.message === 'berhasil login') {
              resolve(res.data.message)
              localStorage.setItem('token', res.data.tokenLogin)
              localStorage.setItem('username', res.data.username)
              localStorage.setItem('id', res.data.id)
            } else if (res.data.message === 'password salah') {
              resolve(res.data.message)
            } else if (res.data.message === 'email not found') {
              resolve(res.data.message)
            } else if (res.data.message === 'email not activated') {
              resolve(res.data.message)
            } else {
              resolve('internal server eror')
            }
          })
      })
    }
  },
  modules: {
    Dashboard,
    Register
  }
})
