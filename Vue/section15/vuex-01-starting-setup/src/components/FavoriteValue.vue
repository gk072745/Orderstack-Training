<template>
  <h2>{{ counter }}</h2>
  <p>We do more........</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.getters.normalizedCounter;
      //after namespace true
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
