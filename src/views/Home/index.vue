<template>
  <div class="content-wrap">
      <div class="row">
              <div style="border: 1px solid green" class="col-md-4 list-chat">
              <div v-if="getCurrentRoute !== 'edit'">
                <Navbar />
              <!-- disini search componnet -->
              <SearchButton/>
              <!-- disini component type -->
              <TypeChat  />
              </div>
              <router-view  />
          </div>
          <div v-if="!receive" @click="DisplayChat" class="col-md-8 content-chat " :class="{displayChat: Display }" style="border: 1px solid blue" >
            <h5 class="text-secondary">{{username}} klik untuk memulai pesan</h5>
          </div>
            <ChatSection  />
          <!-- ChatSection -->
      </div>
      <SidebarRight />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TypeChat from '@/components/molecules/TypeChat.vue'
import SearchButton from '@/components/molecules/SearchButton.vue'
import Navbar from '@/components/molecules/Navbar.vue'
import ChatSection from '@/components/organism/ChatSection.vue'
import SidebarRight from '@/components/molecules/SidebarLeft.vue'
import io from 'socket.io-client'
export default {
  components: {
    TypeChat,
    SearchButton,
    Navbar,
    ChatSection,
    SidebarRight
  },
  data () {
    return {
      slide: false,
      displayChat: true,
      socket: io('http://localhost:3000'),
      userReceiver: '',
      username: localStorage.getItem('username')
    }
  },
  methods: {
    ...mapActions({
      displays: 'Dashboard/DisplayChatMobile'
    }),
    display () {
      this.slide = !this.slide
    },
    DisplayChat () {
      this.displays(true)
    }
  },
  computed: {
    ...mapGetters({
      Display: 'Dashboard/getDisplayChat',
      receive: 'Dashboard/getReceive'
    }),
    getCurrentRoute () {
      return this.$route.name
    }
  }

}
</script>

<style scoped>
.content-wrap {
  overflow-y: hidden;
}
.list-chat {
    float:left;
    width:1000px;
    overflow-y: auto;
    height: 100vh;
}
.i-plus {
    cursor: pointer;
}
.content-chat{
    background:  #FAFAFA;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* chat section */
/* end chatSection */

.image-chat {
    width: 70px;
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
.displayChat {
    position: absolute;
    left: 0;
    transition: 2s;
}
.displayChats {
    position: absolute;
    left: 0;
    transition: 2s;
}
}

</style>
