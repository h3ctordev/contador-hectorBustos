const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
  },
});
