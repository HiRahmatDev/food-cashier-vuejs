<template>
  <div class="home">
    <div class="wrap-menu">
      <Card v-for="(item, i) in allMenu" :key="i"
            :card="item" :index="i"
            @card-select="select" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/part/Card.vue'
import dom from '@/mixins/dom.vue'

export default {
  name: 'Home',
  mixins: [dom],
  components: {
    Card
  },
  computed: {
    allMenu () {
      return this.$store.state.foodMenu
    },
    allCategory () {
      return this.$store.state.foodCategory
    }
  },
  methods: {
    select (id, index) {
      this.$store.commit('SELECT_MENU', id)
      this.showCart()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 54px 0 0 60px;
  padding: 15px;
  box-sizing: border-box;
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  .wrap-menu {
    display: flex;
    flex-wrap: wrap;
  }
}
.card {
  margin: 10px;
}
</style>
