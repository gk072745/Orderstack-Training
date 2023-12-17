const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: 'Manuel Lorenz',
                    phone: '12323-13123-123',
                    email: "manuel@localhost.com"
                },
                {
                    id: "julie",
                    name: 'julie Lorenz',
                    phone: '1983-9823-123',
                    email: "julie@localhost.com"
                }
            ],
            detailsAreVisible: true
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})


app.mount("#app")