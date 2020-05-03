var vueInstance = new Vue({
    el: "#app",
    data: {
        title: "kaka",
        url: 'https://zingnews.vn/',
        price: 10000,
        count: 0,
        clientX: 0,
        clientY: 0,
        message: 'hello',
        firstName: '',
        email: '',
    },
    methods: {
        clickCount() {
            this.count += 1;
        },
        handleMouseMove(e) {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleSubmit(e) {
            e.preventDefault();
            console.log(e)
        },
    },
    computed: { // xu ly nhung logic o template vd the div .....
        reversedMessage() {
            return this.message.split('').reverse().join('-');
        }
    },
})