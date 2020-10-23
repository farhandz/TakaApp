<template>
<div class="type">
    <!-- <h5  class="d-inline-block btn btn-primary btn-lb rounded-pill mr-2">Dashboard</h5>
    <h5>user List</h5>
    <h5>group</h5>
    <h5>Friend Request</h5> -->
    <div v-for="(item, index) in menus" :key="index">
        <router-link
        :to="{name: item.name}"
         class="d-inline-block btn rounded-pill mr-2"
        >
        <h5>{{item.name}}</h5>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: 'dashboard',
          status: false
        },
        {
          name: 'user',
          status: false
        },
        {
          name: 'group',
          status: false
        },
        {
          name: 'friend',
          status: false
        }
      ]
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }

}
</script>

<style scoped>
.type {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    cursor: pointer;
}
@media (max-width: 800px) {
h5 {
    font-size: 13px;
}
}
</style>
