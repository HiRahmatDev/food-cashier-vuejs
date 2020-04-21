<template>
  <aside class="sidebar">
    <div class="sidebar-wrap">
      <a>
        <div class="burger">
          <img src="@/assets/img/menu.png">
          <h2>Menu</h2>
        </div>
      </a>
      <a class="page user">
        <div class="user">
          <img src="@/assets/img/rahmat.jpg">
          <h2>Rahmat Hidayatullah</h2>
        </div>
      </a>
      <router-link class="page" to="/">
        <div class="fork">
          <img src="@/assets/img/fork.png">
          <h2>Foods Items</h2>
        </div>
      </router-link>
      <router-link class="page" to="/history">
        <div class="clipboard">
          <img src="@/assets/img/clipboard.png">
          <h2>History</h2>
        </div>
      </router-link>
      <a class="page">
        <div class="add" @click="$emit('modal-clicked')" >
          <img src="@/assets/img/add.png">
          <h2 class="green">Add Item</h2>
        </div>
      </a>
      <a class="page logout">
        <div @click="$emit('modalflash-clicked')" >
          <img src="@/assets/img/logout.png">
          <h2 class="red">Logout</h2>
        </div>
      </a>
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
  transition: width .3s;
  overflow: hidden;
  z-index: 1;
  &:hover {
    z-index: 3;
    width: 230px;
    max-width: auto;
    overflow: hidden;
    transition-delay: .4s;
  }
  div.sidebar-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  a {
    margin: 10px 0;
    border-radius: 100px;
    outline: none;
    border: none;
    &.page {
      cursor: pointer;
      &.logout {
        margin-top: auto;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.048);
      }
    }
    div {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      padding: 10px;
      img {
        height: 25px;
      }
      &.burger {
        margin: 0px 3px;
        padding: 6.5px 10px;
        img {
          height: 20px;
        }
      }
      &.user {
        img {
          border-radius: 50px;
        }
      }
    }
    h2 {
      margin-left: 22px;
      color: rgb(27, 27, 27);
      font-weight: bold;
      white-space: nowrap;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      &.green {
        color: rgb(62, 161, 62);
      }
      &.red {
        color: rgb(228, 66, 66);
      }
    }
  }
}
</style>
