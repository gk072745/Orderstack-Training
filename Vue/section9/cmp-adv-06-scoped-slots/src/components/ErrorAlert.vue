<template>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 5;
}
</style>
