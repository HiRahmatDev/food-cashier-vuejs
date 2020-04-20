<template>
  <div id="food-cashier">
    <div v-if="$route.name !== 'Register' && $route.name !== 'Login' && $route.name !== 'User'">
      <Navbar @modal-clicked="showModal"
              @cart-clicked="showCart" />
      <Sidebar @modal-clicked="showModal" />
      <Cart @cart-clicked="hideCart"
            @cancel-clicked="cancelOrder"
            @checkout-clicked="showModalCheckout" />
      <Modal :modal="modalAddItem"
            @close-modal="hideModal"
            @submit="addItem" />
      <ModalCheckout @close-modal="hideModalCheckout" />
      <ModalFlash :modalLogout="modalLogout" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue'
import Sidebar from '@/components/base/Sidebar.vue'
import Cart from '@/components/base/Cart.vue'
import Modal from '@/components/base/Modal.vue'
import ModalCheckout from '@/components/base/ModalCheckout.vue'
import ModalFlash from '@/components/base/ModalFlash.vue'
import dom from '@/mixins/dom.vue'

export default {
  mixins: [dom],
  data () {
    return {
      navbarTitle: '',
      modalAddItem: {
        titleHeader: 'Add Item',
        input: {
          foodName: null,
          imgUrl: null,
          foodPrice: null,
          category: null
        },
        buttonName: 'Add'
      },
      modalLogout: {
        titleHeader: 'Yakin mau keluar?',
        titleBody: '',
        button: {
          pro: 'Iya',
          con: 'Batal'
        }
      }
    }
  },
  components: {
    Navbar,
    Sidebar,
    Cart,
    Modal,
    ModalCheckout,
    ModalFlash
  },
  methods: {
    cancelOrder () {
      this.hideCart()
      setTimeout(() => {
        this.$store.state.selected = []
        this.$store.state.cartSum = 0
      }, 300)
    },
    getItem () {
      const proto = {
        mutation: 'GET_ITEM',
        urlPath: 'menu'
      }
      this.$store.dispatch('getApi', proto)
    },
    addItem () {
      // const formData = new FormData()
      // formData.append('food_title', this.modalAddItem.input.foodName)
      // formData.append('id_category', this.modalAddItem.input.category)
      // formData.append('food_price', this.modalAddItem.input.foodPrice)
      // formData.append('img_url', this.modalAddItem.input.imgUrl)
      const dataItem = {
        food_title: this.modalAddItem.input.foodName,
        id_category: this.modalAddItem.input.category,
        food_price: this.modalAddItem.input.foodPrice,
        img_url: this.modalAddItem.input.imgUrl
      }
      const proto = {
        mutation: 'ADD_ITEM',
        urlPath: 'menu',
        dataItem
      }
      this.$store.dispatch('postApi', proto)
      this.hideModal()
      this.getItem()
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
    margin-right: 25vw;
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
