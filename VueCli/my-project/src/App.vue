<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="title='title duoc thay doi'">Thay doi title</button>
    <comp-header
      v-bind:titleHeader="title"
      v-on:changeTitleEvent="handleChangeTitle"
    />
    <comp-footer />
    <list-user
      v-bind:listUser="listUser"
      v-on:handleDeleteUser="handleDeleteUser"
    />
    <user />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import ListUser from './components/ListUser.vue';
import User from './components/User.vue';
export default {
  name: 'App',
  data () {
    return {
      title: "Hello VueJs",
      listUser: [
        {
          id: 1,
          userName: 'user1'
        },
        {
          id: 2,
          userName: 'user2'
        },
        {
          id: 3,
          userName: 'user3'
        }
      ]
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    User
  },
  methods: {
    handleChangeTitle(data) {
      this.title= data.title
    },
    handleDeleteUser(id) {
      const userDelete = this.listUser && this.listUser.filter((item) => {
        return item.id !== id;
      });
      this.listUser = userDelete;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
