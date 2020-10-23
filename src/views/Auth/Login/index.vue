<template>
  <div class="content-wrap">
      <div class="islogin-wrap">
          <form @submit.prevent="onLogin">
    <div class="isLogin mb-3">
        <h2 class="text-primary">login</h2>
    </div>
    <span class="mt-4">Hi, welcome to TakaChat</span>
        <div class="form-group mt-2">
            <label for="exampleFormControlInput1">Email</label>
            <input v-model="form.email"  type="text" class="form-control" id="exampleFormControlInput1" placeholder="email">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">password</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput1" placeholder="password">
        </div>
        <div class="buttoon-login text-center">
            <button class="btn-login text-white" type="submit">login</button>
        </div>
        <div class="forgot-pass">
            <p class="text-primary">forgot password </p>
        </div>
        <div class="login-with text-seconday">
            <hr style="width: 20%; border-top: 3px solid #848484">
            <p class="text-secondary">login with</p>
            <hr style="border-top: 3px solid #848484; width: 20%">
        </div>
         <div class=" text-center mt-2">
            <button class="btn-login-google " type="submit"> <i class="fab fa-google text-primary"></i><span class="ml-3 text-primary">Google</span></button>
        </div>
        <div class="text-center mt-3">
            <span>dont have an acount ? <small @click="registerPath" class="text-primary" style="cursor: pointer">sign up</small></span>
        </div>
 </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      logins: 'actionLogin'
    }),
    onLogin () {
      this.logins(this.form).then(data => {
        if (data === 'berhasil login') {
          Swal.fire(
            'Good job!',
            `${data}`,
            'success'
          )
          setTimeout(() => {
            window.location = '/'
          }, 2000)
        } else if (data === 'email not activated') {
          Swal.fire(
            'Failed',
            `${data}`,
            'error'
          )
        } else if (data === 'password salah') {
          Swal.fire(
            'Failed',
            `${data}`,
            'error'
          )
        } else if (data === 'email not found') {
          Swal.fire(
            'Failed',
              `${data}`,
              'error'
          )
        } else {
          Swal.fire(
            'Failed',
            'internal server error',
            'error'
          )
        }
      })
    },
    registerPath () {
      this.$router.push('/register')
    }
  },
  mounted () {
  }

}
</script>

<style scoped>
.content-wrap {
    border: 1px solid red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5E5E5;
}
.islogin-wrap{
    background: #FFFFFF;
    padding: 30px;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    width: 30%;
    height: 70vh;
    border-radius: 30px;
}
.isLogin {
    display:flex;
    justify-content: center;
}
.btn-login {
    padding: 7px;
    width: 90%;
    align-items: center;
    background: #7E98DF;
    border-radius: 80px;
    border: none;
}
.btn-login-google {
    background: #FFFFFF;
    border: 1px solid #7E98DF;
    box-sizing: border-box;
    border-radius: 70px;
    width: 70%;
    padding: 8px;
}
.forgot-pass {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 30px;
    cursor: pointer;
}
.login-with {
    display: flex;
    justify-content: space-around;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 1px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #D2C2FF;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #D2C2FF;
}

@media (max-width: 800px) {
  .islogin-wrap{
    width: 100%;
    height:  100vh;
    border-radius: 0;
}
.content-wrap{
    height: 100vh;
}
}

</style>
