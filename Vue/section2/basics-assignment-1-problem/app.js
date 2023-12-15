const app = Vue.createApp({
    data() {
        return {
            name: "Govind Kumawat",
            age: 21,
            imgLink: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        }
    },
    methods: {
        randNum() {
            return Math.random()
        },

        after5Age() {
            return this.age + 5
        }

    }


})


app.mount("#assignment")