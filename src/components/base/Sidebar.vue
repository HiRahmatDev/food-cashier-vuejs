<template>
  <aside class="sidebar">
    <div>
      <a class="burger">
        <img src="@/assets/img/menu.png">
      </a>
      <router-link to="/" class="fork">
        <img src="@/assets/img/fork.png">
      </router-link>
      <router-link to="/history" class="clipboard">
        <img src="@/assets/img/clipboard.png">
      </router-link>
      <router-link to="/add" class="add">
        <img src="@/assets/img/add.png">
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
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 7px rgba(0, 0, 0, 0.733);
  padding: 0 10px;
  div {
    display: flex;
    flex-direction: column;
  }
  a {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 10px 0;
    padding: 10px;
    img {
      width: 25px;
    }
  }
}
</style>
