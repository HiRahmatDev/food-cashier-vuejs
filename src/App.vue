<template>
  <div id="food-cashier">
    <Navbar />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue'
import Sidebar from '@/components/base/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
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
}
</style>
