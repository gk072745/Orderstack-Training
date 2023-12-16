const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },

    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage("player", "attack", attackValue)
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 12);
            this.playerHealth -= attackValue;
            this.addLogMessage("monster", "attack", attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.addLogMessage("player", "attack", attackValue)
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(10, 12)
            if (this.playerHealth + healValue < 100) this.playerHealth += healValue;
            else this.playerHealth = 100;
            this.attackPlayer()
            this.addLogMessage("player", "heal", healValue)
        },

        surrender() {
            this.winner = "monster"
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }

    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth <= 0 ? 0 : this.monsterHealth + "%" }
        },
        playerBarStyles() {
            return { width: this.playerHealth <= 0 ? 0 : this.playerHealth + "%" }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        },
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw"
            } else if (value < 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value < 0) {
                this.winner = 'player'
            }
        },
    }
})

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

app.mount("#game")