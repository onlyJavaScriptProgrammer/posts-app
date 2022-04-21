export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    prevPage() {
      this.currentPage--;
      this.$store.dispatch("getAllPosts", this.currentPage);
    },
    nextPage() {
      this.currentPage++;
      this.$store.dispatch("getAllPosts", this.currentPage);
    },
    setPage(p) {
      this.currentPage = p;
      this.$store.dispatch("getAllPosts", p);
    },
  },
};
