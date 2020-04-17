<template>
  <div class="modal ">
    <div @click="$emit('close-modal')" class="bg-modal off"></div>
    <div class="modal-wrap off">
      <div class="modal-head">
        <h2>Add Item</h2>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <div class="label">
              <label for="name">Name</label>
            </div>
            <div class="input">
              <input id="name" type="text">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="image">Image</label>
            </div>
            <div class="input">
              <input id="input" type="file">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="price">Price</label>
            </div>
            <div class="input input-price">
              <input id="price" type="number">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="category">Category</label>
            </div>
            <div class="input input-category">
              <select id="category">
                <option value="0" selected>Choose category..</option>
                <option value="1">Bread</option>
                <option value="2">Beverage</option>
                <option value="3">Preserves</option>
                <option value="4">Cereals</option>
                <option value="5">Fruits & Fruit Juices</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-btn">
        <button @click="$emit('close-modal')" class="btn btn-secondary">Cancel</button>
        <button class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal'
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
    animation-timing-function: ease-out;
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
      animation-timing-function: ease-out;
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
    left: 26%;
    right: 26%;
    overflow: hidden;
  }
  .modal-head {
    h2 {
      font-size: 22px;
      font-weight: bold;
      text-align: left;
      padding: 18px;
    }
  }
  .modal-body {
    form {
      padding: 0 20px;
    }
    .form-group {
      display: flex;
      font-size: 16px;
      font-weight: 600;
      margin: 20px 0;
      .label {
        width: 25%;
        display: flex;
        align-items: center;
      }
      .input {
        display: flex;
        width: 75%;
        input {
          width: 100%;
          font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgb(78, 78, 78);
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.322);
          padding: 8px 14px;
          border: none;
          outline: none;
        }
        &.input-price {
          input {
            width: 65%;
          }
        }
      }
    }
  }
  .modal-btn {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    .btn {
      border-radius: 6px;
      font-size: 18px;
      padding: 8px;
      width: 100px;
      &:first-child {
        margin-right: 14px;
      }
    }
  }
}
</style>
