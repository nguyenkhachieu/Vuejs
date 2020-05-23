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
        textClass: 'active',
        isActive: true,
        isError: true,
        bg: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/denman20200325-nasa.jpg',
        isConditional: true,
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
        },
        background() {
            return 'url(' + this.bg + ')';
        }
    },
})