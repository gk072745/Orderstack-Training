const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: "",
            listVisibility: true,
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.task)
            this.task = ""
        },

        toggleList() {
            this.listVisibility = !this.listVisibility
        },

        deleteTask(ind) {
            this.tasks.splice(ind, 1)
        }
    },

    computed: {

        visibilityClass() {
            return {
                hidden: !this.listVisibility,
                visible: this.listVisibility
            }
        }

    }


})

app.mount("#assignment")