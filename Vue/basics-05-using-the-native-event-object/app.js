const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      name: '',
      fullName: ""
    };
  },
  // watcher methods........................
  // value = this.name
  watch: {
    // one args...letest value
    // name(newValue,oldValue) two args....
    name(value) {
      this.fullName = value ? value + " " + "Kumar" : ""
    },
    // watcher is poworful when we want to do something other like
    // like http request if something changes or timers
    counter(value) {
      // value > 50 && (this.counter = 0)
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0
        }, 2000);
      };
    }
  },

  // dont call unnecessary, improve performance... useful when we only want comnputation....
  // computed: {
  //   fullName() {
  //     console.log(this.name)
  //     return this.name ? this.name + " " + "Kumar" : ""
  //   }
  // },

  methods: {
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ""
    },

    // ................now if we want full name instead of start name
    outputFullname() {
      return this.name ? this.name + " " + "Kumar" : ""
    }

  },

});

app.mount('#events');
