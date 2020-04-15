<template>
  <div id="food-cashier">
    <Navbar @cart-clicked="showCart" />
    <Sidebar />
    <Cart @cart-clicked="hideCart" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue'
import Sidebar from '@/components/base/Sidebar.vue'
import Cart from '@/components/base/Cart.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Cart
  },
  methods: {
    showCart () {
      document.getElementById('food-cashier').classList.add('cart-on')
      document.querySelector('nav').classList.add('cart-on')
      document.querySelector('.cart').classList.add('active')
    },
    hideCart () {
      document.getElementById('food-cashier').classList.remove('cart-on')
      document.querySelector('nav').classList.remove('cart-on')
      document.querySelector('.cart').classList.remove('active')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
body {
  background-color: rgb(247, 247, 247);
}
#food-cashier {
  font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  &.cart-on {
    margin-right: 23vw;
  }
}

.btn {
  border: none;
  font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
}
.btn.btn-primary {
  background-color: #57CAD5;
  color: white;
  font-size: 20px;
  font-weight: 500;
}
.btn.btn-secondary  {
  background-color: #F24F8A;
  color: white;
  font-size: 20px;
  font-weight: 500;
}
</style>
