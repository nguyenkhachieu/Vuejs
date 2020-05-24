<template>
    <div>
        <header><h1>{{ text }}</h1></header>
        <h2>{{titleHeader}}</h2>
        <button v-on:click="changeTitleHeade">Thay doi title tu trong component header</button>
    </div>
</template>

<script>
    export default {
        name: 'comp-header',
        props: {
            titleHeader: {
                type: String,
                default: 'gia tri mac dinh'
            }
        },
        data() {
            return {
                text: 'Header'
            }
        },
        methods: {
            changeTitleHeade(e) {
                const data = {
                    title: 'change Title tu component con header'
                }
                this.$emit('changeTitleEvent', data);
            }
        },
    }
</script>>