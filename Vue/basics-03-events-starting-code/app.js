const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  // we write methods not for funcitons but also we add methods for like vue call when we need.
  methods: {
    add(num) {
      this.counter += num
    },

    reduce(num) {
      this.counter -= num

    }
  }
});

app.mount('#events');
