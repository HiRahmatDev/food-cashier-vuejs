import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodMenu: [],
    foodCategory: [],
    selected: [],
    checkout: [],
    cartSum: 0,
    ppn: 10,
    token: localStorage.token || null
  },
  getters: {
    isLogin: state => state.token !== null,
    isSelected: state => id => {
      const data = state.foodMenu.filter(item => item.id === id)
      const selectedRows = state.selected.filter(item => item.id === id)
      return (selectedRows.length === data.length)
    },
    sumTotal: state => state.selected.reduce((total, item) => total + item.times_price, 0),
    sumPpn: (state, getters) => getters.sumTotal * (state.ppn / 100),
    sumTotalPpn: (state, getters) => getters.sumTotal + getters.sumPpn
  },
  mutations: {
    GET_ITEM (state, result) {
      state.foodMenu = result
    },
    ADD_ITEM (state, result) {
      state.foodMenu.push(result)
    },
    GET_CATEGORY (state, result) {
      state.foodCategory = result
    },
    SELECT_MENU (state, id) {
      const data = state.foodMenu.filter(item => item.id === id)
      const selectedRows = state.selected.filter(item => item.id === id)
      const dataSelected = {
        id: data[0].id,
        food_title: data[0].food_title,
        id_category: data[0].id_category,
        food_price: data[0].food_price,
        counter: data[0].counter,
        times_price: data[0].food_price,
        img_url: data[0].img_url
      }
      if (state.selected.length === 0 || selectedRows[0] === undefined) {
        state.selected.push(dataSelected)
        state.cartSum = state.selected.length
      } else {
        if (dataSelected.id === selectedRows[0].id) {
          const currentId = state.selected.map(item => item.id).indexOf(id)
          state.selected.splice(currentId, 1)
          // state.cartSum = state.selected.length
          return
        }
        state.selected.push(dataSelected)
        state.cartSum = state.selected.length
      }
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
    },
    CART_SUM (state) {
      state.cartSum = state.selected.length
    },
    INCREMENT (state, dataUpdate) {
      const data = state.foodMenu.filter(item => item.id === dataUpdate.id)
      const dataSelected = [
        {
          id: data[0].id,
          food_title: data[0].food_title,
          id_category: data[0].id_category,
          food_price: data[0].food_price,
          counter: dataUpdate.counter + 1,
          times_price: data[0].food_price * dataUpdate.counter,
          img_url: data[0].img_url
        }
      ]
      const updated = state.selected.map(select => dataSelected.find(update => update.id === select.id) || select)
      state.selected = updated
      state.cartSum += dataUpdate.counter - (dataUpdate.counter - 1)
    },
    DECREMENT (state, dataUpdate) {
      const data = state.foodMenu.filter(item => item.id === dataUpdate.id)
      if (dataUpdate.counter <= 1) {
        const currentId = state.selected.map(item => item.id).indexOf(dataUpdate.id)
        state.selected.splice(currentId, 1)
        state.cartSum -= dataUpdate.counter - (dataUpdate.counter - 1)
        return
      }
      const dataSelected = [
        {
          id: data[0].id,
          food_title: data[0].food_title,
          id_category: data[0].id_category,
          food_price: data[0].food_price,
          counter: dataUpdate.counter - 1,
          times_price: data[0].food_price * dataUpdate.counter,
          img_url: data[0].img_url
        }
      ]
      const updated = state.selected.map(select => dataSelected.find(update => update.id === select.id) || select)
      state.selected = updated
      state.cartSum -= dataUpdate.counter - (dataUpdate.counter - 1)
    },
    CHANGE_COUNTER (state, dataUpdate) {
      const data = state.foodMenu.filter(item => item.id === dataUpdate.id)
      if (dataUpdate.counter === '') return
      if (dataUpdate.counter < 1) {
        const currentId = state.selected.map(item => item.id).indexOf(dataUpdate.id)
        state.selected.splice(currentId, 1)
        state.cartSum -= dataUpdate.counter - (dataUpdate.counter - 1)
        return
      }
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
    ADD_TOKEN (state) {
      state.token = localStorage.token
    },
    DELETE_TOKEN (state) {
      state.token = null
    }
  },
  actions: {
    getApi (context, proto) {
      Axios.get(process.env.VUE_APP_URL_API + proto.urlPath)
        .then(res => {
          context.commit(proto.mutation, res.data)
        })
    },
    postApi (context, proto) {
      Axios.post(process.env.VUE_APP_URL_API + proto.urlPath, proto.formData)
        .then(res => {
          context.commit(proto.mutation, res.data)
        })
    }
  },
  modules: {
  }
})
