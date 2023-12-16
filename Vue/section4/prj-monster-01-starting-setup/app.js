const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },

    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRandomValue(5, 12)
            this.playerHealth -= attackValue
        }
    },
})

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min))
}
app.mount("#game")