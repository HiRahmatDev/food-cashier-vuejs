<template>
  <div class="card">
    <div class="img-wrap">
      <img src="@/assets/img/espresso.jpg" alt="">
    </div>
    <div class="text-wrap">
      <p class="title-menu">{{ card.title }}</p>
      <p class="price">{{ setRp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  computed: {
    setRp () {
      return 'Rp. ' + this.card.price
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
      transition: transform ease .2s;
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
  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.171);
    cursor: pointer;
  }
  &:hover img {
    transform: scale(1.06);
  }
}
</style>
