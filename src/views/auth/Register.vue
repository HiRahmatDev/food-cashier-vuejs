<template>
  <div class="register">
    <form @submit.prevent="signIn">
      <div class="form-head">
        <h1>SIGN UP</h1>
      </div>
      <div v-if="flashMsg !== null" class="flash-alert" :class="flashInfo">
        <p>{{ flashMsg.head }}</p>
        <p>{{ flashMsg.body }}</p>
      </div>
      <div class="form-body">
        <div class="form-group">
          <div class="input">
            <input v-model="fullname"
                   class="fullname" type="text" placeholder="Fullname">
          </div>
        </div>
        <div class="form-group">
          <div class="input">
            <input v-model="email"
                   class="email" type="email" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <div class="input">
            <input v-model="password1"
                   class="password" type="password" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <div class="input">
            <input v-model="password2"
                   class="password2" type="password" placeholder="Repeat Password">
          </div>
        </div>
      </div>
      <div class="form-btn">
        <button class="btn btn-primary">Sign up</button>
        <router-link to="/login" class="btn btn-secondary">Log in</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullname: '',
      email: '',
      password1: '',
      password2: '',
      error: false,
      flashMsg: null,
      flashInfo: ''
    }
  },
  methods: {
    signIn () {
      const dataUser = {
        fullname: this.fullname,
        email: this.email,
        password: this.password1
      }
      this.flashMsg = {
        head: 'please wait...'
      }
      this.flashInfo = ''
      if (this.fullname === '' || this.email === '' || this.password1 === '' || this.password2 === '') {
        this.flashInfo = 'danger'
        this.flashMsg = {
          head: 'Please fill the forms!'
        }
        return
      }
      if (this.password1 !== this.password2) {
        this.flashInfo = 'danger'
        this.flashMsg = {
          head: 'Password is not matched!'
        }
        return
      }
      this.$http.post(process.env.VUE_APP_URL_API + 'auth/register', dataUser)
        .then(res => {
          this.signInSuccess(res)
        })
    },
    signInSuccess (response) {
      this.$http.post(process.env.VUE_APP_URL_API + 'auth/send-email', { token: response.data.token })
        .then(() => {
          this.flashInfo = response.data.status
          this.flashMsg = response.data.info
        })
        .catch(() => {
          this.flashInfo = response.data.status
          this.flashMsg = response.data.info
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.register {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  form {
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.171);
    padding: 20px;
    border-radius: 5px;
    max-width: 95%;
    width: 340px;
    box-sizing: border-box;
    .form-head {
      margin-bottom: 20px;
      h1 {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .flash-alert {
      text-align: left;
      font-size: 10px;
      font-weight: 500;
      color: rgb(139, 139, 139);
      line-height: 1.5;
      padding: 7px 10px;
      margin-bottom: 5px;
      &.danger {
        border: 1.2px solid #F24F8A;
        border-radius: 3px;
        background-color: rgb(243, 222, 230);
        color: #F24F8A;
      }
      &.warning {
        border: 1.2px solid #eca41e;
        border-radius: 3px;
        background-color: #fffaf2;
        color: #eca41e;
      }
      p {
        &:first-child {
          font-size: 14px;
        }
      }
    }
    .form-body {
      .form-group {
        display: flex;
        .input {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin: 5px 0;
          width: 100%;
          input {
            font-family: 'Airbnb Cereal App', Avenir, Helvetica, Arial, sans-serif;
            font-weight: bold;
            box-sizing: border-box;
            width: 100%;
            border-radius: 3px;
            border: 1px solid rgb(185, 185, 185);
            padding: 10px;
            outline: none;
            color: black;
            &::placeholder {
              color:rgb(170, 170, 170)
            }
          }
          p {
            text-align: left;
            padding: 0 10px;
            font-size: 12px;
            font-weight: 500;
            color: rgb(218, 86, 86);
            margin-top: 3px;
            animation-name: fade-out;
            animation-duration: 5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
            transition: ease .2s;
            &.off {
              font-size: 0px;
              margin: 0;
              padding: 0;
              transition: ease .2s;
            }
          }
        }
      }
    }
    .form-btn {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      button {
        font-size: 18px;
        width: 100%;
        padding: 8px;
        border-radius: 3px;
        cursor: pointer;
        &:first-child {
          margin-bottom: 10px;
        }
      }
      a {
        font-size: 18px;
        width: 100%;
        padding: 10px 8px;
        border-radius: 3px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
