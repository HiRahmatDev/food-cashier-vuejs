<template>
  <div class="cart">
    <div class="cart-header">
      <div @click="$emit('cart-clicked')" >
        <button class="trolly">
          <img src="@/assets/img/shopping-cart.png">
        </button>
        <h1>Cart</h1>
        <div class="badge-cart">0</div>
      </div>
    </div>
    <div class="wrap-body">
      <div class="cart-body">
        <div class="cart-detail">
          <div class="cart-img">
            <img src="@/assets/img/espresso.jpg">
          </div>
          <div class="cart-info">
            <h2>Coffee Latte</h2>
            <div class="cart-count">
              <div class="grup-counter">
                <button>-</button>
                <input type="number">
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <div class="total-result">
            <p>Total:</p>
            <p>Rp. 105.000</p>
          </div>
          <span>*Belum termasuk ppn</span>
        </div>
        <div class="cart-btn-group">
          <button class="btn btn-primary">Checkout</button>
          <button @click="$emit('cart-clicked')" class="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  width: 0vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  box-shadow: 4px 0 7px rgba(0, 0, 0, 0.733);
  overflow: hidden;
  transition: .3s;
  &.active {
    width: 24vw;
    top: 0;
  }
}
.cart-header, .wrap-body {
  width: 100%;
}
.cart-header {
  padding: 15px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .trolly {
    margin: 0 5px 0 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      height: 25px;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .badge-cart {
    width: 18px;
    height: 18px;
    border-radius: 15px;
    background-color: #57CAD5;
    color: white;
    margin-left: 4px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    line-height: 18px;
  }
}
.wrap-body {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 90%;
  .cart-body {
    width: 100%;
    background-color: palegreen;
    .cart-detail {
      display: flex;
      padding: 20px;
      .cart-img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .cart-footer {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .cart-total {
      padding: 0 5px;
      width: 100%;
      text-align: left;
      .total-result {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-bottom: 4px;
        font-weight: bold;
      }
      span {
        font-size: 12px;
      }
    }
    .cart-btn-group {
      width: 100%;
      button {
        width: 100%;
        margin: 5px 0;
        padding: 6px 0;
        border-radius: 2px;
        cursor: pointer;
      }
    }
  }
}
</style>
