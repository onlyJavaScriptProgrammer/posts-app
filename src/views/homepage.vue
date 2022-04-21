<template>
  <homepage-header />
  <div class="notFoundPosts" v-if="this.$store.state.posts.length === 0">
    Ничего не найдено
  </div>
  <main class="main">
    <posts-card
      v-for="post in getPosts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
      @click="
        $router.push({
          name: 'Post',
          params: { id: post.id },
        })
      "
      class="main__card"
    />
  </main>
  <div class="footer__hp" v-if="this.$store.state.isShowPagination">
    <pagination />
  </div>
</template>

<script>
import HomepageHeader from "../components/homepage-header.vue";
import PostsCard from "../components/posts-card.vue";
import Pagination from "../components/UI/pagination.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "homepage",
  components: {
    PostsCard,
    HomepageHeader,
    Pagination,
  },
  methods: {
    ...mapMutations(["togglePagination"]),
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
};
</script>

<style lang="scss">
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 23px;
  margin-bottom: 40px;
}
.footer__hp {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 136px;
}

.notFoundPosts {
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
  .main {
    grid-template-columns: 1fr;
    gap: 0;
    justify-content: center;
  }
}
</style>
