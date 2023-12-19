<template>
  <form
    class="userData"
    @submit.prevent="submitData">
    <div>
      <label for="">username :</label>
      <input
        type="text"
        v-model="username" />
    </div>
    <div>
      <label for="">Age :</label>
      <input
        type="number"
        v-model="age"
        min="1" />
    </div>
    <button type="submit">Sumbit</button>
  </form>
</template>

<script>
export default {
  emits: ["newData"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("newData", this.username, this.age);
    },
  },
};
</script>

<style>
.userData {
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 3em;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
</style>
