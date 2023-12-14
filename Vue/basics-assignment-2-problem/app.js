const app = Vue.createApp({
    data() {
        return {
            output1: "",
            output2: ""
        }
    },
    methods: {
        showAlert() {
            alert("Learn Vue.js!")
        },

        getInput(e) {
            this.output1 = e.target.value
        },

        getInput2(e) {
            this.output2 = e.target.value
        }
    }
})


app.mount("#assignment")