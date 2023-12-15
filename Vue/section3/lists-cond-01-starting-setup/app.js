const app = Vue.createApp({
  data() {
    return { goals: ["learn Vue.js"], goal: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
    },
    removeGoal(id) {
      this.goals.splice(id, 1)

    }
  }
});



app.mount('#user-goals');
