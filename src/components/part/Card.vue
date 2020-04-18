<template>
  <div @click="$emit('card-select', card.id, index)" class="card">
    <div class="img-wrap">
      <div v-if="isSelected" class="checked">
        <img src="@/assets/img/checked.png" alt="">
      </div>
      <img :src="card.img_url" alt="">
    </div>
    <div class="text-wrap">
      <p class="title-menu">{{ card.food_title }}</p>
      <p class="price">Rp. {{ this.card.food_price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card', 'index'],
  computed: {
    isSelected () {
      return this.$store.getters.isSelected(this.card.id)
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
    position: relative;
    .checked {
      position: absolute;
      width: 100%;
      height: 100%;
      background:rgba(0, 0, 0, 0.527);
      display: flex;
      justify-content: center;
      img {
        position: absolute;
        width: 50px;
        object-fit: contain;
      }
    }
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
  transition: .1s;
  &:hover {
    box-shadow: 0 5px 20px -10px rgba(0, 0, 0, 0.37);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
  }
}
</style>
