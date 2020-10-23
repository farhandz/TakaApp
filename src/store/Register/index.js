import axios from 'axios'
const state = () => {
  return {
    data: '',
    display: false
  }
}
const getters = {

}
const mutations = {

}

const actions = {
  UserRegist ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_API}/user/register`, payload).then(ress => {
        resolve(ress.data)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
