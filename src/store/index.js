import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodMenu: [],
    selected: []
  },
  getters: {
    isSelected: state => id => {
      const data = state.foodMenu.filter(item => item.id === id)
      const selectedRows = state.selected.filter(item => item.id === id)
      return (selectedRows.length === data.length)
    },
    sumTotal: state => {
      return state.selected.reduce((total, item) => total + item.times_price, 0)
    },
    setRp: () => price => 'Rp. ' + price
  },
  mutations: {
    GET_MENU (state, data) {
      state.foodMenu = data
    },
    SELECT_MENU (state, id) {
      const data = state.foodMenu.filter(item => item.id === id)
      const selectedRows = state.selected.filter(item => item.id === id)
      const dataSelected = {
        id: data[0].id,
        food_title: data[0].food_title,
        id_category: data[0].id_category,
        food_price: data[0].food_price,
        counter: 1,
        times_price: data[0].food_price,
        img_url: data[0].img_url
      }
      if (state.selected.length === 0 || selectedRows[0] === undefined) {
        state.selected.unshift(dataSelected)
      } else {
        if (dataSelected.id === selectedRows[0].id) {
          const currentId = state.selected.map(item => item.id).indexOf(id)
          state.selected.splice(currentId, 1)
          return
        }
        state.selected.unshift(dataSelected)
      }
    },
    INCREMENT (state, dataUpdate) {
      const data = state.foodMenu.filter(item => item.id === dataUpdate.id)
      const dataSelected = [
        {
          id: data[0].id,
          food_title: data[0].food_title,
          id_category: data[0].id_category,
          food_price: data[0].food_price,
          counter: dataUpdate.counter,
          times_price: data[0].food_price * dataUpdate.counter,
          img_url: data[0].img_url
        }
      ]
      const updated = state.selected.map(select => dataSelected.find(update => update.id === select.id) || select)
      state.selected = updated
    },
    DECREMENT (state, dataUpdate) {
      const data = state.foodMenu.filter(item => item.id === dataUpdate.id)
      const dataSelected = [
        {
          id: data[0].id,
          food_title: data[0].food_title,
          id_category: data[0].id_category,
          food_price: data[0].food_price,
          counter: dataUpdate.counter,
          times_price: data[0].food_price * dataUpdate.counter,
          img_url: data[0].img_url
        }
      ]
      const updated = state.selected.map(select => dataSelected.find(update => update.id === select.id) || select)
      state.selected = updated
    },
    DELETE_MENU (state, id) {
      const data = state.foodMenu.filter(item => item.id === id)
      const selectedRows = state.selected.filter(item => item.id === id)
      if (state.selected.length === 0 || selectedRows[0] === undefined) {
      } else {
        if (data[0].id === selectedRows[0].id) {
          const currentId = state.selected.map(item => item.id).indexOf(id)
          state.selected.splice(currentId, 1)
        }
      }
    }
  },
  actions: {
    getApi (context) {
      Axios.get(process.env.VUE_APP_URL_API + 'menu')
        .then(res => {
          context.commit('GET_MENU', res.data)
        })
    }
  },
  modules: {
  }
})
