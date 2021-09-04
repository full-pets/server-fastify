const app = new Vue({
    el: '#app',
    data: {
        user: {
            login: '',
            email: '',
            password: '',
            role: this.isLogin ? '' : 'user',
            check: true,
        },
        isLogin: false,
        switch: 'Login'
    },
    methods: {
        toggle() {
            this.switch = this.switch === 'Login' ? 'Registration' : 'Login'
            this.user = {
                login: '',
                email: '',
                password: '',
                role: this.isLogin ? '' : 'user',
                check: true,
            }
        },
        options(method, body, type) {
            const user = {}
            Object.entries(body).reduce((a, [k, v]) => (v.length ? (user[k] = v) : user), user)
            return {
                method,
                headers: { 'Content-Type': type },
                body: JSON.stringify(user)
            }
        },
        async signIn() {
            fetch('/api/login', this.options('POST', this.user, 'application/json')).then(a => a.json()).then(console.log)
        },
        async register() {
            fetch('/api/register', this.options('POST', this.user, 'application/json')).then(a => a.json()).then(console.log)
        }
    }
})
