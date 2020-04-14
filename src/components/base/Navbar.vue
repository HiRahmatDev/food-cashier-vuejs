<template>
  <nav>
    <div>
      <button class="burger">
        <img src="@/assets/img/menu.png">
      </button>
      <h1>Food Items</h1>
      <div>
        <button class="search">
          <img src="@/assets/img/magnifying-glass.png">
        </button>
        <button class="cart">
          <img src="@/assets/img/shopping-cart.png">
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 -4px 7px rgba(0, 0, 0, 0.733);
  font-size: 20px;
  font-weight: bold;
  padding: 6px 0;
  z-index: 1;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 0 13px;
      padding: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    .burger {
      img {
        height: 20px;
      }
    }
    .search {
      img {
        height: 20px;
      }
    }
    .cart {
      img {
        height: 25px;
      }
    }
  }
}
</style>
