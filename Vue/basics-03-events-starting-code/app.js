const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  // we write methods not for funcitons but also we add methods for like vue call when we need.
  methods: {
    add(num) {
      this.counter += num
    },

    reduce(num) {
      this.counter -= num

    },

    //............................ 
    // setName(e) {
    //   this.name = e.target.value
    // },
    // now if i also need to pass some arguments for that syntax
    setName(e, lastName) {
      this.name = `${e.target.value} ${lastName}`
    }
  }
});

app.mount('#events');
