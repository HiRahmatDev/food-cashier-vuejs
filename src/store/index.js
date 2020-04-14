import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodMenu: null
  },
  mutations: {
    loadApi (state, data) {
      state.foodMenu = data
    }
  },
  actions: {
    async loadApi (context, option) {
      const res = await Axios.get(process.env.VUE_APP_URL_API + option)
      context.commit('loadApi', res.data)
    }
  },
  modules: {
  }
})
