<template>
  <div class="container">
    <div class="container__userData">
      <user-data @new-data="handleNewData"> </user-data>
    </div>
    <div class="container__activeUser">
      <active-user
        v-for="{ id, username, age } of users"
        :key="id"
        :id="id"
        :username="username"
        :age="age"
        @delete="deleteUser">
      </active-user>
    </div>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },

  data() {
    return {
      users: [
        {
          id: 1,
          username: "user1",
          age: 24,
        },
        {
          id: 2,
          username: "user2",
          age: 26,
        },
      ],
    };
  },

  methods: {
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
    handleNewData(username, age) {
      const newUser = { username, age, id: new Date().toISOString() };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 30px;
}
.container__userData {
  top: 150px;
}
.container__activeUser {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 100vh;
  max-width: 50%;
}
</style>
