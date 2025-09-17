import api from '../../api/api'
import { router } from '../../main'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images 
}

const actions = {
  async fetchImages({ rootState, commit }) {                      // rootState contains properties inside all other modules available
    const token = rootState.auth.token
    const response = await api.fetchImages(token);
    commit('setImages', response)
    console.log(response)
  },
  async uploadImages({ rootState, commit }, images) {
    const { token } = rootState.auth;
    console.log("calling upload imgur api with images and token = ", images, token);
    api.uploadApi(images, token);

    router.push('/')

  }
}

const mutations = {
  setImages: (state, value) => state.images = value 
}

export default {
  state,
  getters,
  actions,
  mutations
}