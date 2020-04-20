<template>
  <div class="modal">
    <div class="bg-modal flash fade-in"></div>
    <div class="modal-wrap flash pop-up">
      <div class="modal-head">
        <h2>{{ modalLogout.titleHeader }}</h2>
      </div>
      <div class="modal-body">
        <p>{{ modalLogout.titleBody }}</p>
      </div>
      <div class="modal-btn">
        <button @click="$emit('close-modal')" class="btn btn-secondary">{{ modalLogout.button.con }}</button>
        <button @click="$emit('submit')" class="btn btn-primary">{{ modalLogout.button.pro }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-flash',
  props: ['modalLogout'],
  methods: {
  }
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
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
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
    max-height: 95%;
    height: 200px;
    max-width: 95%;
    width: 400px;
    overflow: hidden;
  }
  .modal-head {
    h2 {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      padding: 18px;
    }
  }
  // .modal-body {
  // }
  .modal-btn {
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    .btn {
      border-radius: 6px;
      font-size: 18px;
      padding: 8px;
      width: 100px;
      cursor: pointer;
      &:first-child {
        margin-right: 14px;
      }
    }
  }
}
</style>
