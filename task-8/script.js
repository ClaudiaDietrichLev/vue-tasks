Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        '🍏 Apple',
        '🍌 Banana',
        '🍉 Melon',
        '🫐 Blueberry',
        '🍓 Strawberry',
        '🍍 Ananas',
        '🥭 Mango',
      ],
    };
  },
  methods: {
    mouseCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    removeFruit(fruit) {
      this.fruitBasket.splice(this.fruitBasket.indexOf(fruit), 1);
    },
  },
}).mount('#app');
