<template>
  <div class="loader">
    <img src="../../assets/assets/img/loader.png" alt="">
   <div class="dotLoader">
     <b-icon icon="three-dots"  animation="cylon" font-scale="2"></b-icon>
   </div>
  </div>
</template>

<script>
export default {

  mounted () {
    setTimeout(() => {
      this.$router.push('/home')
    }, 4000)
  }

}
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100vh;
  background: #7E98DF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
