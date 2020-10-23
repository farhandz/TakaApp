<template>
  <div class="wrapper">
      <div class="username" >
          <b-icon @click="Back" icon="arrow-left-square-fill" variant="primary" scale="2"></b-icon>
          <h3 class="mr-5 name">@username</h3>
      </div>
      <div class="user-info">
          <!-- <div class="circular--portrait">
            <img  class="mt-3" src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/340?cb=20170716092103" alt="">
          </div> -->
           <b-avatar src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/340?cb=20170716092103" size="6rem"></b-avatar>
          <h3 class="font-weight-bold">Farhan Ammar</h3>
          <span class="text-secondary">@ammarjoz09</span>
      </div>
      <div class="acount-info mt-3" >
          <h3 style="font-style: italic;">account</h3>
          <div>
              <span>ammarjoz09@gmail.com</span>
              <br>
              <span class="text-primary">tap to change phone number</span>
          </div>
          <hr>
      </div>
      <div class="acount-info mt-3" >
          <h5 style="font-style: italic;">i'm senior backend developer at microsoft</h5>
          <div>
              <span class="text-secondary">Bio</span>
              <br>
              <span class="text-primary">tap to change bio</span>
          </div>
          <hr>
      </div>
      <div class="mt-2 icon-setting" >
          <h3 class="font-weight-bold mt-3">settting</h3>
          <div class="item-setting mt-3">
             <b-icon  icon="bell-fill" variant="primary" scale="2"></b-icon>
             <h4 class="ml-4 text-primary">notification</h4>
          </div>
          <div class="item-setting mt-3">
             <b-icon  icon="lock-fill" variant="primary" scale="2"></b-icon>
             <h4 class="ml-4 text-primary">Private and Security </h4>
          </div>
          <div class="item-setting mt-3">
             <b-icon  icon="clipboard-data" variant="primary" scale="2"></b-icon>
             <h4 class="ml-4 text-primary">Data and Storage</h4>
          </div>
          <div class="item-setting mt-3">
             <b-icon  icon="chat-left-text" variant="primary" scale="2"></b-icon>
             <h4 class="ml-4 text-primary">Chat Setting</h4>
          </div>
          <div class="item-setting mt-3">
             <b-icon  icon="phone-vibrate" variant="primary" scale="2"></b-icon>
             <h4 class="ml-4 text-primary">Device</h4>
          </div>
          <div class="item-setting mt-3" @click="OnLogout">
             <b-icon  icon="door-open" variant="danger" scale="2"></b-icon>
             <h4 class="ml-4 text-danger">Logout</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    Back () {
      this.$router.push({ name: 'dashboard' })
    },
    OnLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('id')
      window.location = '/login'
    }
  }

}
</script>

<style scoped>
.wrapper {
    padding: 30px;
    overflow-x: hidden !important;
}
.name {
    margin-right: 200px;
}
.username {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}
.user-info {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.item-setting {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.icon-setting {
   padding: 10px;
   cursor: pointer;
}
.circular--portrait {
   position:relative;
  width:20%;
  padding-bottom:20%;
  border-radius:50%;
  overflow:hidden;
}
.circular--portrait img {
 position:absolute;
  object-fit: cover;
  width:100%;height:100%;
}

</style>
