/** @format */
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMonster() {
      // Formula to calculate random number between 5 and 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
