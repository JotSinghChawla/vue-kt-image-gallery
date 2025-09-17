import api from '../../api/api'
import qs from 'qs'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('api_token')
}

const getters = {
  isLoggedIn: (state) => {
    return !!state.token                   // !! to make a value to a boolean
  }
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);                       // do not call mutations.setToken, 
    window.localStorage.removeItem('api_token')
  },
  login: () => {
    api.login();
  },
  finaliseLogin({ commit }, hash) {
    const query = qs.parse(hash);

    commit('setToken',  query.access_token)
    window.localStorage.setItem('api_token', query.access_token)
    router.push('/')
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