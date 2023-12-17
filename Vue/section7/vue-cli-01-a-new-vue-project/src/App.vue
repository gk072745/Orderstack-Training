<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-contact> </friend-contact>
      <friend-contact> </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "12323-13123-123",
          email: "manuel@localhost.com",
        },
        {
          id: "manuel2",
          name: "Manuel2 Lorenz",
          phone: "12323-13123-123",
          email: "manuel2@localhost.com",
        },
      ],
    };
  },
};
</script>
