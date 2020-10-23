<template>
  <div class="content-wrap">
      <div class="islogin-wrap">
          <form @submit.prevent="onRegis">
    <div class="isLogin mb-3">
        <h2 class="text-primary">Register</h2>
    </div>
    <span class="mt-4">Lets create your account</span>
        <div class="form-group mt-2">
            <label for="exampleFormControlInput1">Name</label>
            <input v-model="form.username" type="text" class="form-control" id="exampleFormControlInput1" placeholder="name">
        </div>
        <div class="form-group mt-2">
            <label for="exampleFormControlInput1">Email</label>
            <input v-model="form.email"  type="text" class="form-control" id="exampleFormControlInput1" placeholder="email">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">password</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput1" placeholder="password">
        </div>
        <div class="buttoon-login text-center">
            <button class="btn-login text-white" type="submit">Register</button>
        </div>
        <div class="login-with text-seconday mt-4">
            <hr style="width: 20%; border-top: 3px solid #848484">
            <p class="text-secondary">Register with</p>
            <hr style="border-top: 3px solid #848484; width: 20%">
        </div>
         <div class=" text-center mt-4">
            <button class="btn-login-google " type="submit"> <i class="fab fa-google text-primary"></i><span class="ml-3 text-primary">Google</span></button>
        </div>
        <div class="text-center mt-3">
            <span>do you have a acount ? <small class="text-primary" @click="loginPath" style="cursor: pointer">Login</small></span>
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
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      regis: 'Register/UserRegist'
    }),
    onRegis () {
      this.regis(this.form).then(data => {
        console.log(data)
        if (data.message === 'berhasil register, silahkan cek email') {
          Swal.fire(
            'Good job!',
            `${data.message}`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/login')
          }, 4000)
        } else {
          Swal.fire(
            'Good job!',
            'duplicate email',
            'error'
          )
        }
      })
    },
    loginPath () {
      this.$router.push('/login')
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
