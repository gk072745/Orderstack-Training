<template>
  <router-view v-slot="slotProps">
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"> </component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    // ......................
    //animation trasintion funcions for vue transition element
    beforeEnter(el) {
      console.log('beforeEnter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('Enter');
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      el;
      console.log('afterEnter');
    },

    beforeLeave(el) {
      console.log('Before leave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      el;
      console.log('afterLeave');
    },
    // .........
    enterCancelled(el) {
      el;
      console.log('enterCancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      el;
      console.log('leaveCancelled');
      clearInterval(this.leaveInterval);
    },
    // .........................
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 300ms ease-in; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* .v-enter-from {
   opacity: 0;
  transform: translateY(-30px); 
} */

.para-enter-active {
  /* transition: all 300ms; */
  /* animation: slide-fade 3s ease-out; */
}

/*.v-enter-to {
  opacity: 1;
  transform: translateY(0px); 
}*/

/* ........................................ */
/* .v-leave-from {
  opacity: 1;
  transform: translateY(0px);
} */

.para-leave-active {
  /* transition: all 300ms; */
  /* animation: slide-fade 0.3s ease-out reverse; */
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */
/* ............... */

.fade-button-enter-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-enter-to {
  opacity: 1;
}

.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-leave-to {
  opacity: 0;
}

.router-enter-from {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 0.3s ease-out;
}
.router-enter-to {
  opacity: 1;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
