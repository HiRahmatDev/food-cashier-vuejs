<template>
  <div class="card">
    <div class="img-wrap">
      <img :src="card.img_url" alt="">
    </div>
    <div class="text-wrap">
      <p class="title-menu">{{ card.food_title }}</p>
      <p class="price">{{ setRp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  computed: {
    setRp () {
      return 'Rp. ' + this.card.food_price
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
  .img-wrap {
    width: 100%;
    height: 140px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-wrap {
    padding: 0 4px;
    .title-menu {
      margin-top: 1px;
    }
    .price {
      font-weight: bold;
      margin: 4px 0 8px;
    }
  }
  transition: .2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 20px -10px rgba(0, 0, 0, 0.37);
    cursor: pointer;
  }
}
</style>
