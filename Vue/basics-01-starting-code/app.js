
const app = Vue.createApp({
    data() {
        return {
            // storing data.............we can store any data here and that will visible on dom.
            courseGoal: "Finish the course and learn Vue!",
            // now i want to send a link as data....
            vueLink: "https://vuejs.org/"
        };
    }
});

app.mount("#user-goal")