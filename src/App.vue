<template>
  <div class="loading" v-if="this.$store.state.loading">Загрузка...</div>
  <div class="wrapper" v-else>
    <div class="container">
      <router-view />
    </div>
    <homepage-footer v-if="!this.$store.state.error" />
  </div>
</template>

<script>
import HomepageFooter from "./components/homepage-footer.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    HomepageFooter,
  },
  mounted() {
    this.getAllPosts(1);
  },
  methods: {
    ...mapActions(["getAllPosts"]),
    ...mapMutations(["setLoading"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Manrope:wght@300;400;500;600;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 973px;
  margin: 0 auto;
}

.loading {
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  color: #000000;
  margin-top: 50px;
}

@media (max-width: 376px) {
  .container {
    width: 375px;
    padding: 0 16px;
  }

  .loading {
    font-size: 32px;
    line-height: 36px;
    margin-top: 20px;
  }
}
</style>
