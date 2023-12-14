const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  // we write methods not for funcitons but also we add methods for like vue call when we need.
  methods: {
    add() {
      this.counter++
    },

    reduce() {
      this.counter--
    }
  }
});

app.mount('#events');
