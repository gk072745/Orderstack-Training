<template>
  <div class="user">
    <div>
      <p><strong>Username: </strong>{{ username }}</p>
      <p><strong>Age: </strong>{{ age }}</p>
    </div>
    <div class="btns">
      <button
        class="btn delete-btn"
        @click="$emit('delete', id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "username", "age"],
  emits: ["delete"],
};
</script>

<style>
.user {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 10px;
  min-width: 250px;
}

.btn {
  padding: 0.3em 0.8em;
  font-size: 0.8rem;
  border-radius: 5px;
  border: 1px solid grey;
}
</style>
