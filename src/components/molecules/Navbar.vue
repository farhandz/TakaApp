<template>
  <nav class="mt-4">
                  <div  class="logo">
                     <h4 class="text-primary">TakaChat</h4>
                  </div>
                      <div @click="display" style="cursor: pointer" class="mr-2">
                           <b-icon icon="card-text" scale="3" variant="primary"></b-icon>
                      </div>
                  <ul  :class="{onClicklogo: slide}">
                      <div class="edit-user">
                           <b-icon @click="EditPage" icon="gear" scale="2" variant="primary"></b-icon>
                           <b-icon  @click="display" icon="x-circle-fill" scale="2" variant=primary></b-icon>
                      </div>
                       <li @click="inviteFriend">
                        <span><b-icon icon="person-plus" scale="2" variant="primary"></b-icon></span>
                        <span class="text-primary ml-3">Invite Friend</span>
                      </li>
                      <li>
                        <span><b-icon icon="question-circle" scale="2" variant="primary"></b-icon></span>
                        <span class="text-primary ml-3">TakaChat Faq</span>

                      </li>
                      <li>
                         <span><b-icon icon="bookmark" scale="2" variant="primary"></b-icon></span>
                        <span class="text-primary ml-3">Save Message</span>
                      </li>
                      <li @click="contact">
                        <span><b-icon icon="people" scale="2" variant="primary"></b-icon></span>
                        <span class="text-primary ml-3">Contact</span>
                      </li>
                      <li>
                         <span><b-icon icon="telephone" scale="2" variant="primary"></b-icon></span>
                        <span class="text-primary ml-3">Call</span>
                      </li>
                  </ul>
              </nav>
</template>

<script>
export default {
  data () {
    return {
      slide: false
    }
  },
  methods: {
    display () {
      this.slide = !this.slide
    },
    contact () {
      this.$router.push({ name: 'user' })
    },
    inviteFriend () {
      this.$router.push({ name: 'friend' })
    },
    EditPage () {
      this.$router.push({ name: 'edit' })
    }
  }

}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}
.edit-user {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
}
nav ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 15%;
    top: 0;
    left: 300px;
    position: fixed;
    align-items: center;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.03);
    border-radius: 35px 0px 0px 35px;
}
nav ul li {
    list-style: none;
}
.onClicklogo {
   display: none;
}
@media (max-width: 800px) {
 nav ul {
    width: 50%;
    height: 100vh;
    left: 0;
}
.content-chat {
    position: absolute;
    left: -500px;
    transition: 2s;
}
}

</style>
