<template>
  <div class="modal ">
    <div @click="$emit('close-modal')" class="bg-modal checkout off"></div>
    <div class="modal-wrap checkout off">
      <div class="modal-head">
        <div class="head-1">
          <h2>Checkout</h2>
          <p class="receipt-no">Receipt No: #123121514</p>
        </div>
        <div class="head-2">
          <p class="cashier">Cashier: Rahmat Hidayatullah</p>
        </div>
      </div>
      <div class="modal-body">
        <div class="row item-selected">
          <p class="side-left item-name">Coffee Latte 1x</p>
          <p class="side-right item-price">Rp. 15000</p>
        </div>
        <div class="row ppn">
          <p class="side-left ppn-percent">Ppn 10%</p>
          <p class="side-right ppn-price">Rp. 10500</p>
        </div>
        <div class="row total-amount">
          <p class="side-left total-name">Total:</p>
          <p class="side-right total-price">Rp. 10000</p>
        </div>
      </div>
      <div class="modal-btn">
        <div class="payment-type">
          <p>Payment: Cash</p>
        </div>
        <button class="btn btn-secondary">Print</button>
        <p>Or</p>
        <button class="btn btn-primary">Send Email</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-checkout'
}
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    visibility: hidden;
    opacity: 0
  }
  100% {
    visibility: visible;
    opacity: 1
  }
}
@keyframes fade-out {
  0% {
    visibility: visible;
    opacity: 1
  }
  100% {
    visibility: hidden;
    opacity: 0
  }
}
@keyframes pop-up {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.7);
  }
  70% {
    transform: scale(1.03);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes pop-down {
  0% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  30% {
    transform: scale(1.03);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.7);
  }
}
.bg-modal {
  &.off {
    visibility: hidden;
    opacity: 0;
  }
  &.fade-in {
    animation-name: fade-in;
    animation-fill-mode: forwards;
    animation-duration: .2s;
    animation-timing-function: ease-out;
  }
  &.fade-out {
    animation-name: fade-out;
    animation-fill-mode: forwards;
    animation-duration: .2s;
    animation-timing-function: ease-in;
  }
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
}
.modal {
  .modal-wrap {
    animation-timing-function: ease-out;
    &.off {
      visibility: hidden;
      transform: scale(0.7);
      opacity: 0;
    }
    &.pop-up {
      animation-name: pop-up;
      animation-fill-mode: forwards;
      animation-duration: .2s;
      animation-timing-function: ease-out;
    }
    &.pop-down {
      animation-name: pop-down;
      animation-fill-mode: forwards;
      animation-duration: .2s;
      animation-timing-function: ease-in;
    }
    position: fixed;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: white;
    top: 55px;
    bottom: 55px;
    left: 30%;
    right: 30%;
    overflow: hidden;
  }
  .modal-head {
    padding: 18px;
    .head-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      h2 {
        font-size: 22px;
        font-weight: bold;
        text-align: left;
      }
      p.receipt-no {
        font-weight: bold;
      }
    }
    .head-2 {
      text-align: left;
      p.cashier {
        font-weight: 500;
        font-size: 13px;
      }
    }
  }
  .modal-body {
    padding: 18px;
    height: 50vh;
    overflow-y: auto;
    .row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      &.total-amount {
        padding: 18px 0;
      }
      .side-left {
        display: flex;
        &.total-name {
          margin-left: auto;
        }
      }
      .side-right {
        display: flex;
        padding-left: 15px;
      }
    }
    p {
      font-weight: bold;
    }
  }
  .modal-btn {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .payment-type {
      padding-bottom: 24px;
      p {
        text-align: left;
        margin: 0;
      }
    }
    p {
      margin: 5px 0;
      font-weight: bold;
    }
    .btn {
      width: 100%;
      border-radius: 6px;
      font-size: 18px;
      padding: 12px;
      cursor: pointer;
    }
  }
}
</style>
