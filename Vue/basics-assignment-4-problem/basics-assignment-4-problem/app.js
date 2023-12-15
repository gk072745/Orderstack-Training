
const app = Vue.createApp({
    data() {
        return {
            classes: "",
            visible: true,
            hidden: false,
            bgColor: "",
        }
    },

    methods: {
        toggle() {
            this.visible = !this.visible;
            this.hidden = !this.hidden;
        }

    },

    computed: {
        toggleClass() {
            return {
                visible: this.visible,
                hidden: this.hidden
            }
        }
    }

})

app.mount("#assignment")