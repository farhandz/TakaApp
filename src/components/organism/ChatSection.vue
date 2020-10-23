<template>
<div  class="col-md-8 content-body"  v-if="receive" :class="{displayChat: Display}">
   <div class="header-chat">
             <div v-b-toggle.sidebar-right class="header-avatar">
               <b-avatar  variant="primary" text="F"></b-avatar>
             <div class="info-user">
               <h2>{{receive}}</h2>
               <small>online</small>
             </div>
             </div>
             <div @click="Undisplay" class="icon-header mr-4">
                <b-icon style="cursor: pointer" icon="arrows-fullscreen" scale="2"></b-icon>
             </div>
            </div>
            <div class="body-chat">
              <div  class="notification">
                <p>online</p>
              </div>
              <div v-for="(item, index) in historyMessage" :key="index">
              <div v-if="username !== item.sender" class="chat">
               <b-avatar variant="primary" text="F"></b-avatar>
              <p>{{item.message}}</p>
              </div>
              <div v-else class="chat2">
               <b-avatar variant="primary" text="F"></b-avatar>
              <p>{{item.message}}</p>
              </div>
              </div>
              <div  v-for="(item, index) in  dataprivate" :key="index">
              <div v-if="username !== item.sender && item.receiver === 'ammar' " class="chat">
               <b-avatar variant="primary" text="F"></b-avatar>
              <p>{{item.message}}</p>
              </div>
              <div v-else class="chat2">
               <b-avatar variant="primary" text="F"></b-avatar>
              <p>{{item.message}}</p>
              </div>
              </div>
            </div>
            <div class="input-chat ">
              <form @submit.prevent="onSend">
                <div class="input-text">
              <input v-model="message" type="text" placeholder="ketik disini sob">
              <div class="input-icon">
                  <b-icon icon="plus" variant="primary" scale="2"></b-icon>
                  <b-icon icon="emoji-laughing" variant="primary" scale="1"></b-icon>
                  <b-icon icon="arrows-fullscreen" variant="primary" scale="1"></b-icon>
              </div>
              </div>
              </form>
          </div>
</div>
</template>

<script>
import io from 'socket.io-client'
// import InputChat from '@/components/molecules/InputChat'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      socket: io('http://localhost:3000'),
      username: localStorage.getItem('username'),
      message: '',
      historyMessage: [],
      listmessage: [],
      privatemessage: this.dataprivate
    }
  },
  computed: {
    ...mapGetters({
      Display: 'Dashboard/getDisplayChat',
      receive: 'Dashboard/getReceive',
      dataprivate: 'Dashboard/getPrivate'
    })
  },
  methods: {
    ...mapActions({
      displays: 'Dashboard/DisplayChatMobile',
      privateAction: 'Dashboard/getPrivateMessage'
    }),
    Undisplay () {
      this.displays(true)
    },
    onSend () {
      this.socket.emit('send-message', {
        sender: this.username,
        receiver: this.receive,
        message: this.message
      })
      // this.dataprivate(...this.dataprivate, {
      //   sender: this.username,
      //   message: this.message
      // })
      this.listmessage = [...this.listmessage, {
        sender: this.username,
        message: this.message
      }]
      this.privateAction(this.listmessage)
      // this.privateAction = [...this.privateAction, {
      //   message: this.message,
      //   sender: this.username
      // }]
    },
    getprivatmessage () {
      const asu = this.listmessage.filter((item) => {
        if (!this.receive) {
          return item.sender === this.receive || item.sender === this.username
        } else {
          return item.receiver === this.receive || item.sender === this.receive
        }
      })
      this.privatemessage = asu
    }
  },
  mounted () {
    this.socket.on('send-history-message', data => {
      // console.log(data)
      this.historyMessage = data
    })
    this.socket.on('asu', data => {
      this.listmessage = [...this.listmessage, data]
      this.privateAction(this.listmessage)
    })
    this.socket.emit('join-room', {
      user: this.username
    })
  }
}
</script>

<style scoped>
.content-body {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header-chat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #FFFFFF;
}
.header-avatar {
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;
}
.header-avatar .info-user h1 {
  font-size: 20px;
  display: block;/* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2em;
  line-height: 3em;
  max-width: 70px;
}
.body-chat {
  width: 100%;
  height: 100vh;
  background: #FAFAFA;
  overflow-y: auto;
}
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

}
.notification p {
  background: rgb(138, 129, 112);
  color: #FFFFFF;
}
.chat {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.chat p {
  margin-left: 20px;
  max-width: 30%;
  background: #7E98DF;
  border-radius: 10px 35px 20px 10px;
}
.chat2 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
   align-items: center;
}
.chat2 p {
  margin-right: 20px;
  max-width: 30%;
  background: #FFFFFF;
  border-radius: 10px 35px 35px 10px;
}
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
@media (max-width: 800px) {
.chat2 p {
  margin-right: 20px;
  max-width: 80%;
}
.chat p {
  margin-left: 20px;
  max-width: 80%;
}
.content-body {
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
