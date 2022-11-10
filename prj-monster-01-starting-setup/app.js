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
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      //  call method
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
