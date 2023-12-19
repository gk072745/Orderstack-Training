<template>
  <li :key="id">
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["id", "name", "phone", "email", "isFavorite"],

  // props: {
  //   id: String,
  //   name: String,
  //   phone: String,
  //   email: String,
  //   isFavorite: String,
  // },

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // default:function(){}
      default: false,
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },

  emits: ["toggle-favorite"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) return true;
  //     console.log("id is missing!!!");
  //     return false;
  //   },
  // },

  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.isFavorite = !this.isFavorite.....props are read only;
      // this.friendIsFavorite = !this.friendIsFavorite;
      // console.log(this.friendIsFavorite);

      // convantion for using this like cap-up case
      // after first all args are data or paramtrs for other
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
