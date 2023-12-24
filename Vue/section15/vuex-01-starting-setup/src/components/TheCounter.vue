<template>
  <!-- <h2>{{ counter }}</h2> -->
  <h2>{{ finalCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    // //   return this.$store.getters.finalCounter;
    // },
    // ..............
    //after namespace true
    // ...mapGetters(['finalCounter']),
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
