const state = () => {
  return {
    data: '',
    display: false,
    receive: '',
    private: ''
  }
}
const getters = {
  getDisplayChat: (state) => state.display,
  getReceive: (state) => state.receive,
  getPrivate: (state) => state.private
}
const mutations = {
  SET_TRUE_data: (state, data) => {
    state.display = !data
  },
  ON_SET_RECEIVER: (state, data) => {
    state.receive = data
  },
  ON_SET_PRIVATE: (state, data) => {
    state.private = data
  }
}

const actions = {
  DisplayChatMobile ({ commit, dispatch }, data) {
    commit('SET_TRUE_data', data)
  },
  UserReceiver ({ commit }, data) {
    commit('ON_SET_RECEIVER', data)
  },
  getPrivateMessage ({ commit }, data) {
    commit('ON_SET_PRIVATE', data)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
