<template>
    <div>
        <h1>List User</h1>
        <user
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
            v-on:deleteUser="deleteUser"
        />
    </div>
</template>

<script>
import User from './User.vue';
export default {
    name: 'list-user',
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            // text: 'List User'
        }
    },
    components: {
        User
    },
    methods: {
        deleteUser(id) {
            this.$emit('handleDeleteUser', id)
        }
    },
}
</script>>