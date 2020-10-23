<template>
<div class="input-chat ">
    <div class="input-text">
    <input type="text" placeholder="ketik disini sob">
    <div class="input-icon">
        <b-icon icon="plus" variant="primary" scale="2"></b-icon>
        <b-icon icon="emoji-laughing" variant="primary" scale="1"></b-icon>
        <b-icon icon="arrows-fullscreen" variant="primary" scale="1"></b-icon>
    </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.input-chat {
  width: 100%;
}
.input-text input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background: #FAFAFA;
  border-radius: 15px;
  border: none;
}
.input-icon {
  position: absolute;
  bottom: 20px;
  right: 50px;
  display: flex;
  width: 100px;
  justify-content: space-around;
}
</style>
