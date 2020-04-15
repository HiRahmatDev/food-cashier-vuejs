<template>
  <aside class="sidebar">
    <div>
      <a class="burger">
        <img src="@/assets/img/menu.png">
        <h2>Menu</h2>
      </a>
      <router-link to="/" class="fork">
        <img src="@/assets/img/fork.png">
        <h2>Foods Items</h2>
      </router-link>
      <router-link to="/history" class="clipboard">
        <img src="@/assets/img/clipboard.png">
        <h2>History</h2>
      </router-link>
      <router-link to="/add" class="add">
        <img src="@/assets/img/add.png">
        <h2 class="green">Add Item</h2>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 45px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 7px rgba(0, 0, 0, 0.733);
  padding: 0 10px;
  transition: all .3s;
  overflow: hidden;
  &:hover {
    width: 170px;
    overflow: hidden;
    z-index: 3;
    transition-delay: .4s;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  a {
    display: flex;
    align-items: center;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    margin: 10px 0;
    padding: 10px;
    h2 {
      margin-left: 22px;
      color: rgb(27, 27, 27);
      font-weight: bold;
      white-space: nowrap;
      &.green {
        color: rgb(62, 161, 62);
      }
    }
    &.burger {
      margin: 7.3px 3px;
      img {
        height: 20px;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.048);
    }
    img {
      height: 25px;
    }
  }
}
</style>
