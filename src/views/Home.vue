<template>
  <div class="home">
    <div class="wrap-menu">
      <Card :card="item" v-for="(item, i) in getMenu" :key="i" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/part/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    getMenu () {
      return this.$store.state.foodMenu
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('getApi', 'menu')
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 8vh 0 0 60px;
  padding: 15px;
  box-sizing: border-box;
  height: 90vh;
  overflow-y: scroll;
  .wrap-menu {
    display: flex;
    flex-wrap: wrap;
  }
}
.card {
  margin: 10px;
}
</style>
