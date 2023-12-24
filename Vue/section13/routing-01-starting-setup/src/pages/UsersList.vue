<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="toggle">save chnages</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesave: false };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // this.$router.back('/teams');
      // this.$router.forward('/teams');
    },
    toggle() {
      this.changesave = true;
    },
  },
  // alternative for beforeenter if we want to use inside component
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },

  // to other hook for route guard
  // before updating data of the route
  beforeRouteUPdate(to, from, next) {
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId)
    next();
  },

  // perform operation after leaving this page
  unmounted() {
    console.log('unmounted');
  },

  //........it will exucate first
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changesave) {
      next();
    } else {
      const flag = prompt('want to leave');
      next(flag);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
