const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            console.log(box)
            if (box === "A") this.boxASelected = !this.boxASelected
            if (box === "B") this.boxBSelected = !this.boxBSelected
            if (box === "C") this.boxCSelected = true
        },
    }

});

app.mount("#styling")