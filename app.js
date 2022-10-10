const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Fina Empire",
      author: "Brandom Sanderson",
      age: 45,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
  },
})

app.mount("#app")
