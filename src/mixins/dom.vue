<script>
export default {
  methods: {
    showCart () {
      document.getElementById('food-cashier').classList.add('cart-on')
      document.querySelector('.trolly').classList.add('hidden')
      document.querySelector('nav').classList.add('cart-on')
      document.querySelector('.cart').classList.add('active')
    },
    hideCart () {
      document.getElementById('food-cashier').classList.remove('cart-on')
      document.querySelector('.trolly').classList.remove('hidden')
      document.querySelector('nav').classList.remove('cart-on')
      document.querySelector('.cart').classList.remove('active')
    },
    showModal () {
      const bgModal = document.querySelector('.bg-modal')
      const modalWrap = document.querySelector('.modal-wrap')
      bgModal.classList.replace('off', 'fade-in')
      bgModal.classList.replace('fade-out', 'fade-in')
      modalWrap.classList.replace('off', 'pop-up')
      modalWrap.classList.replace('pop-down', 'pop-up')
    },
    hideModal () {
      const bgModal = document.querySelector('.bg-modal')
      const modalWrap = document.querySelector('.modal-wrap')
      bgModal.classList.replace('fade-in', 'fade-out')
      modalWrap.classList.replace('pop-up', 'pop-down')
    },
    showModalCheckout () {
      const bgModalCheckout = document.querySelector('.bg-modal.checkout')
      const modalWrapCheckout = document.querySelector('.modal-wrap.checkout')
      bgModalCheckout.classList.replace('off', 'fade-in')
      bgModalCheckout.classList.replace('fade-out', 'fade-in')
      modalWrapCheckout.classList.replace('off', 'pop-up')
      modalWrapCheckout.classList.replace('pop-down', 'pop-up')
    },
    hideModalCheckout () {
      const bgModalCheckout = document.querySelector('.bg-modal.checkout')
      const modalWrapCheckout = document.querySelector('.modal-wrap.checkout')
      bgModalCheckout.classList.replace('fade-in', 'fade-out')
      modalWrapCheckout.classList.replace('pop-up', 'pop-down')
    },
    showFlash () {
      const bgModalCheckout = document.querySelector('.modal.flash')
      const modalWrapCheckout = document.querySelector('.modal-wrap.flash')
      bgModalCheckout.classList.replace('off', 'fade-in')
      bgModalCheckout.classList.replace('fade-out', 'fade-in')
      modalWrapCheckout.classList.replace('off', 'pop-up')
      modalWrapCheckout.classList.replace('pop-down', 'pop-up')
    },
    hideFlash () {
      const bgModalCheckout = document.querySelector('.modal.flash')
      const modalWrapCheckout = document.querySelector('.modal-wrap.flash')
      bgModalCheckout.classList.replace('fade-in', 'fade-out')
      modalWrapCheckout.classList.replace('pop-up', 'pop-down')
    }
  }
}
</script>
