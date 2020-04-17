<template>
  <div id="food-cashier">
    <Navbar @modal-clicked="showModal"
            @cart-clicked="showCart" />
    <Sidebar @modal-clicked="showModal" />
    <Cart @cart-clicked="hideCart" />
    <Modal @close-modal="hideModal" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue'
import Sidebar from '@/components/base/Sidebar.vue'
import Cart from '@/components/base/Cart.vue'
import Modal from '@/components/base/Modal.vue'
import dom from '@/mixins/dom.vue'

export default {
  mixins: [dom],
  components: {
    Navbar,
    Sidebar,
    Cart,
    Modal
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_font.scss';
body {
  background-color: rgb(247, 247, 247);
}
#food-cashier {
  font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  transition: .3s;
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
.d-none {
  display: none;
}
</style>
