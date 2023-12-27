<template>
  <section class="container">
    <user-data :lastName="lastName" :firstName="firstName"></user-data>

    <!-- <button @click="setNewAge">Change Age</button> -->
    <h5>
      {{ fullName }}
    </h5>
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" ref="lastNameInput" />
    </div>
    <button @click="setLastName">SET NAME</button>
  </section>
</template>

<script>
import { computed, ref, watch } from 'vue';
import UserData from './components/UserData.vue';

// import { ref } from 'vue';

export default {
  components: { UserData },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  setup() {
    // const userName = ref('Maximilian');
    // const age = ref(31);
    // const user = ref({
    //   name: 'MaxMilion',
    //   age: 31,
    // });
    // const user = reactive({
    //   name: 'MaxMilion',
    //   age: 31,
    // });

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref();

    // setTimeout(() => {
    //   user.name = 'Max...Milion';
    //   user.age = 33;
    // }, 2000);

    // function setNewAge() {
    //   user.age = 35;
    // }

    watch([firstName, lastName], (newValue, oldValue) => {
      console.log(oldValue);
      console.log(newValue);
    });
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    const fullName = computed(() => firstName.value + ' ' + lastName.value);

    return {
      firstName,
      lastName,
      fullName,
      lastNameInput,
      setLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
