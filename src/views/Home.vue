<template>
  <div class="home">
    <div class="wrap-menu">
      <Card :card="item" v-for="item in api" :key="item.id" />
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
  data () {
    return {
      api: [
        {
          id: 1,
          title: 'Espresso',
          price: 10000
        },
        {
          id: 2,
          title: 'Rengginang',
          price: 99000
        },
        {
          id: 3,
          title: 'Rendang',
          price: 120000
        },
        {
          id: 4,
          title: 'Kupat Tahu',
          price: 500000
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  margin: 53px 0 0 60px;
  padding: 15px;
  .wrap-menu {
    display: flex;
    flex-wrap: wrap;
  }
}
.card {
  margin: 10px;
}
</style>
