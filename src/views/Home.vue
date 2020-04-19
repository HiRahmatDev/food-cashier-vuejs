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
    }
  },
  methods: {
    select (id, index) {
      this.$store.commit('SELECT_MENU', id)
      this.showCart()
    },
    getItem () {
      const proto = {
        mutation: 'GET_ITEM',
        urlPath: 'menu'
      }
      this.$store.dispatch('getApi', proto)
    }
  },
  created () {
    this.getItem()
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
  .wrap-menu {
    display: flex;
    flex-wrap: wrap;
  }
}
.card {
  margin: 10px;
}
</style>
