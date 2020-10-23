<template>
<div>
<div v-for="(item, index) in searchResult" :key="index"  class="people-chat mt-4">
        <div   v-b-toggle.sidebar-right class="image-chat">
             <b-avatar variant="primary" text="BV"></b-avatar>
        </div>
        <div  @click="displayChat(item.friend)" class="people-list">
            <p class="font-weight-bold">{{item.friend}}</p>
            <p class="text-primary">bapak mana bapak mana di mana</p>
        </div>
        <div  class="people-list">
            <p>19.40</p>
            <span>10</span>
        </div>
 </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import io from 'socket.io-client'
export default {
  data () {
    return {
      slide: false,
      socket: io('http://localhost:3000'),
      searchResult: [],
      username: localStorage.getItem('username'),
      id_user: localStorage.getItem('id'),
      privatemessage: [],
      listmessage: [],
      UserReceiver: null
    }
  },
  computed: {
    ...mapGetters({
      dataprivate: 'Dashboard/getPrivate'
    })
  },
  methods: {
    displayChat (params) {
      this.privatemessage = []
      this.listmessage = []
      this.data(this.slide)
      this.UserReceiver = params
      this.receiver(params)
      this.socket.emit('get-hisyory-message', {
        sender: this.username,
        receiver: params
      })
      this.getprivatmessage()
      this.privates([])
    },
    getprivatmessage () {
      const asu = this.dataprivate.filter((item) => {
        if (this.UserReceiver === null) {
          return item.sender === this.UserReceiver || item.sender === this.username
        } else {
          return item.receiver === this.UserReceiver || item.sender === this.UserReceiver
        }
      })
      this.privatemessage = asu
    },
    ...mapActions({
      data: 'Dashboard/DisplayChatMobile',
      receiver: 'Dashboard/UserReceiver',
      privates: 'Dashboard/getPrivateMessage'
    })
  },
  mounted () {
    this.socket.emit('haiii', 'asu')
    this.socket.emit('send-id', {
      id: this.id_user,
      friend: this.username
    })
    this.socket.on('send-search-result', data => {
      this.searchResult = data
    })
    this.socket.emit('join-room', {
      user: this.username
    })
  }

}
</script>

<style scoped>
.people-chat {
display: flex;
flex-direction: row;
justify-content: space-evenly;
}
.people-list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.people-list span {
 background: blueviolet;
   border-radius: 1em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1em;
  margin-right: 15px;
  text-align: center;
  width: 2rem;
}
</style>
