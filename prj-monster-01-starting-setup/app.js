/** @format */
// Creating function outside of Vue app be course don't need accessed to the Vue properties
function getRandomValue(min, max) {
  // Formula to calculate random number between 5 and 12
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },

    useSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    // Name of the watch has to be the same name as a property
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
      } else if (value <= 0) {
        // Player Lost
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
      }
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      //  call method
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if ((this.playerHealth = healValue > 100)) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
  },
});

app.mount("#game");
