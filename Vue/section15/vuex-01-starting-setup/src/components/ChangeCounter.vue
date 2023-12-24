<template>
  <!-- <button @click="addOne">Add 1</button> -->
  <!-- <button @click="increase({ value: 10 })">Increase</button> -->
  <button @click="increase({ value: 10 })">Increase</button>
  <button @click="inc">Increment</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', { inc: 'increment', increase: 'increase' }),
  },
};
</script>
