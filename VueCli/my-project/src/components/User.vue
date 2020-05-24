<template>
    <div v-if="user">
        <div>User Name: {{ user.userName }}</div>
        <button class="delete" v-on:click="handleDelete" >delete</button>
        <br />
        <br />
    </div>
</template>

<script>
export default {
    name: 'user',
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    methods: {
        handleDelete() {
         this.$emit('deleteUser', this.user.id)   
        }
    },
}
</script>>