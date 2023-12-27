<template>
  <div>
    <h2>{{ fullName }}</h2>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    console.log(context);
    const fullName = computed(() => props.firstName + ' ' + props.lastName);
    return {
      fullName,
    };
  },
};
</script>
