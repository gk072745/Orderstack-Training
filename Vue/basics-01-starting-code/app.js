
const app = Vue.createApp({
    data() {
        return {
            // storing data.............we can store any data here and that will visible on dom.
            courseGoal: "Finish the course and learn Vue!",
        };
    }
});

app.mount("#user-goal")