<template>
  <div class="cart-detail">
    <div class="cart-img">
      <img :src="item.img_url">
    </div>
    <div class="cart-info">
      <h2>{{ item.food_title }}</h2>
      <div class="cart-count">
        <div class="group-counter">
          <button @click="decrement" >-</button>
          <input v-model="counter" type="number">
          <button @click="increment" >+</button>
        </div>
        <span>{{ $store.getters.setRp(timesPrice) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      counter: this.item.counter
    }
  },
  computed: {
    timesPrice () {
      return this.counter * this.item.food_price
    }
  },
  methods: {
    increment () {
      this.counter++
      const data = {
        id: this.item.id,
        counter: this.counter
      }
      this.$store.commit('INCREMENT', data)
    },
    decrement () {
      if (this.counter === 1) {
        this.$store.commit('DELETE_MENU', this.item.id)
        return
      }
      this.counter--
      const data = {
        id: this.item.id,
        counter: this.counter
      }
      this.$store.commit('DECREMENT', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-detail {
  display: flex;
  padding: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.068);
  }
  .cart-img {
    width: 30%;
    height: 70px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cart-info {
    padding: 2px 0 2px 12px;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    h2 {
      font-weight: bold;
      font-size: 20px;
      text-align: left;
      width: 100%;
    }
    .cart-count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .group-counter {
        display: flex;
        input {
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &[type=number] {
            -moz-appearance: textfield;
          }
        }
        button, input {
          font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
          height: 25px;
          width: 25px;
          background-color: white;
          font-weight: bold;
          color: #82DE3A;
          text-align: center;
          border: 1px solid #82DE3A;
          outline: none;
          box-sizing: border-box;
        }
        button {
          background-color: rgb(239, 255, 226);
          font-size: 23px;
          line-height: 0;
          cursor: pointer;
          &:first-child {
            border-right: none;
          }
          &:last-child {
            border-left: none;
          }
          &:active {
            background-color: rgb(218, 255, 188);
          }
        }
      }
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
