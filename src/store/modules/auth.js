import api from '../../api/api'

const state = {
  token: null
}

const getters = {
  isLoggedIn: (state) => {
    return !!state.token                   // !! to make a value to a boolean
  }
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);                       // do not call mutations.setToken, 
  },
  login: () => {
    api.login();
  }
}

const mutations = {
  setToken: (state, value) => state.token = value 
}

export default {
  state,
  getters,
  actions,
  mutations: mutations
}