<template>
  <li :key="id">
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "phone", "email", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.isFavorite = !this.isFavorite.....props are read only;
      this.friendIsFavorite = !this.friendIsFavorite;
      console.log(this.friendIsFavorite);
    },
  },
};
</script>
