const app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: '',
        check: true
    },
    methods: {
        send() {
            fetch('/items').then(console.log)
        }
    }
})
