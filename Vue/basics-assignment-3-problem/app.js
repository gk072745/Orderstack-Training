const app = Vue.createApp({

    data() {
        return {
            number: 0,
        }
    },

    methods: {
        add(val) {
            this.number += val
        }
    },

    watch: {
        result(value) {
            that = this
            setTimeout(() => {
                that.number = 0
            }, 5000);
        }
    },

    computed: {
        result() {
            if (this.number < 37) return "Not there yet"
            else if (this.number > 37) return "Too much!"
            else return this.number
        }
    }



})


app.mount("#assignment")