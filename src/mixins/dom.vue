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
      if (this.$route.path === '/add') {
        bgModal.classList.replace('off', 'fade-in')
        bgModal.classList.replace('fade-out', 'fade-in')
        modalWrap.classList.replace('off', 'pop-up')
        modalWrap.classList.replace('pop-down', 'pop-up')
        return
      }
      this.$router.push('/add')
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
    }
  }
}
</script>
