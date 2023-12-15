const app = Vue.createApp({
  data() {
    return { goals: ["learn Vue.js"], goal: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
    }
  }
});



app.mount('#user-goals');
