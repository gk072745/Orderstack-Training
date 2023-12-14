
const app = Vue.createApp({
    data() {
        return {
            // storing data.............we can store any data here and that will visible on dom.
            courseGoalA: "<h1>Finish the course and learn Vue!</h1>",
            courseGoalB: "Master Vue and build amazing apps!</h1>",
            // now i want to send a link as data....
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            return randomNum < 0.5 ?
                this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount("#user-goal")