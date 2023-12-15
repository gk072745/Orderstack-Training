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
    }
  },

  // dont call unnecessary, improve performance...
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
