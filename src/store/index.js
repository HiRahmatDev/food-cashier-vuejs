import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodMenu: []
  },
  mutations: {
    getMenu (state, data) {
      state.foodMenu = data
    }
  },
  actions: {
    async getApi (context, option) {
      const res = await Axios.get(process.env.VUE_APP_URL_API + option)
      context.commit('getMenu', res.data)
    },
    async postApi (context, option) {
      const res = await Axios.post(process.env.VUE_APP_URL_API + option)
      context.commit('functionName', res.data)
    }
  },
  modules: {
  }
})
