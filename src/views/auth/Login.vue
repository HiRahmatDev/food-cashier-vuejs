<template>
  <div class="login">
    <form @submit.prevent="logIn">
      <div class="form-head">
        <h1>LOG IN</h1>
      </div>
      <div v-if="flashMsg !== null && flashInfo !== 'warning'" class="flash-alert"
           :class="flashInfo" >
        <p>{{ flashMsg }}</p>
      </div>
      <div v-if="flashMsg !== null && flashInfo === 'warning'" class="flash-alert"
           :class="flashInfo" >
        <p>{{ flashMsg }}</p>
        <span @click="sendEmail" >send me!</span>
      </div>
      <div class="form-body">
        <div class="form-group">
          <div class="input">
            <input v-model="email"
                   class="email" type="email" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <div class="input">
            <input v-model="password"
                   class="password" type="password" placeholder="Password">
          </div>
        </div>
      </div>
      <div class="form-btn">
        <button class="btn btn-primary">Log in</button>
        <router-link to="/register">Don't have account yet?, sign up here!.</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: false,
      flashMsg: null,
      flashInfo: ''
    }
  },
  methods: {
    logIn () {
      const dataUser = {
        email: this.email,
        password: this.password
      }
      this.flashInfo = ''
      this.flashMsg = 'please wait...'
      this.$http.post(process.env.VUE_APP_URL_API + 'auth/login', dataUser)
        .then(res => {
          this.logInSuccess(res)
        })
    },
    logInSuccess (response) {
      if (response.status === 203) {
        this.flashInfo = response.data.status
        this.flashMsg = response.data.info
        delete localStorage.token
        return
      }
      if (response.data.is_active === 0) {
        this.flashInfo = 'warning'
        this.flashMsg = 'Your email is not verified!'
        delete localStorage.token
        return
      }
      this.flashInfo = response.data.status
      this.flashMsg = response.data.info
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
      localStorage.token = response.data.token
    },
    sendEmail () {
      this.flashMsg = 'please wait...'
      const token = jwt.verify(localStorage.token, process.env.VUE_APP_SECRET_KEY)
      const dataUser = {
        token
      }
      this.$http.post(process.env.VUE_APP_URL_API + 'auth/send-email', dataUser)
        .then(res => {
          this.flashInfo = 'success'
          this.flashMsg = res.data.msg
          delete localStorage.token
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
.login {
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      font-size: 10px;
      font-weight: 500;
      color: rgb(139, 139, 139);
      line-height: 1.5;
      padding: 7px 10px;
      margin-bottom: 5px;
      &.success {
        border: 1.2px solid #53c725;
        border-radius: 3px;
        background-color: #edffe5;
        color: #53c725;
      }
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
      span {
        background-color: #eca41e;
        padding: 2px 7px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:active {
          transform: translateY(1px);
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
      // text-align: left;
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
        font-size: 10px;
        font-weight: 500;
        color: #303030;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
