const app = new Vue({
    el: '#app',
    data: {
        user: {
            login: '',
            email: '',
            password: '',
            role: 'user',
            check: true,
        },
        isLogin: false
    },
    methods: {
        options(method, body, type) {
            const user = Object.entries(body).reduce((a,[k,v]) => (v ? (a[k]=v) : a), {})
            return {
                method,
                headers: {
                    'Content-Type': type
                },
                body: JSON.stringify(user)
            }
        },
        async signIn() {
            fetch('/api/login', this.options('POST', this.user, 'application/json')).then(a=>a.json()).then(console.log)
        },
        async register() {
            fetch('/api/register', this.options('POST', this.user, 'application/json')).then(a=>a.json()).then(console.log)
        }
    }
})
