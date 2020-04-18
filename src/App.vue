<template>
  <div id="food-cashier">
    <Navbar @modal-clicked="showModal"
            @cart-clicked="showCart" />
    <Sidebar @modal-clicked="showModal" />
    <Cart @cart-clicked="hideCart"
          @checkout-clicked="showModalCheckout" />
    <Modal :modal="modalAddItem"
           @close-modal="hideModal" />
    <ModalCheckout @close-modal="hideModalCheckout" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue'
import Sidebar from '@/components/base/Sidebar.vue'
import Cart from '@/components/base/Cart.vue'
import Modal from '@/components/base/Modal.vue'
import ModalCheckout from '@/components/base/ModalCheckout.vue'
import dom from '@/mixins/dom.vue'

export default {
  data () {
    return {
      navbarTitle: '',
      modalAddItem: {
        titleHeader: 'Add Item',
        buttonName: 'Add',
        input: {
          foodName: null,
          imgUrl: null,
          foodPrice: null,
          category: null
        }
      }
    }
  },
  mixins: [dom],
  components: {
    Navbar,
    Sidebar,
    Cart,
    Modal,
    ModalCheckout
  },
  methods: {
    addBook () {
      const formData = new FormData()
      formData.append('food_title', this.modalAddItem.input.foodName)
      formData.append('id_category', this.modalAddItem.input.category)
      formData.append('food_price', this.modalAddItem.input.foodPrice)
      formData.append('img_url', this.modalAddItem.input.imgUrl)
      const proto = {
        mutation: 'ADD_ITEM',
        urlPath: 'menu',
        formData
      }
      this.$store.dispatch('postApi', proto)
    }
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
