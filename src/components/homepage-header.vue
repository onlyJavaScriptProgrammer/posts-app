<template>
  <header class="header">
    <div class="header__post">Посты</div>
    <div class="header__logo">Logo</div>
    <div class="header__wrapper">
      <input
        type="search"
        class="header__search"
        placeholder="Поиск"
        v-model="searchData"
        @input="sentData"
      />
      <div class="header__posts" @click="$router.push({ name: 'Home' })">
        <posts-icon class="header__posts_icon" />
        <div class="header__posts_text">Посты</div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "homepage-header",
  data() {
    return {
      searchData: null,
    };
  },
  methods: {
    ...mapActions(["getAllPosts", "searchPosts"]),
    ...mapMutations(["truePagination", "falsePagination"]),
    sentData() {
      this.falsePagination();
      if (!this.searchData) {
        this.getAllPosts(1);
        this.truePagination();
        return;
      }
      this.searchPosts(this.searchData);
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 46px 0;
  &__post {
    display: none;
  }
  &__logo,
  &__post {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__search {
    width: 309px;
    height: 50px;
    padding: 16px 36px 14px;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    background: url("../assets/search.svg") 8px center no-repeat #3c3c431a;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  &__posts {
    display: flex;
    align-items: center;
    margin-left: 92px;
    &_icon,
    &_text {
      display: inline-block;
      cursor: pointer;
    }
    &_text {
      margin-left: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      color: #ff008a;
    }
  }
}

@media (max-width: 376px) {
  .header {
    height: 52px;
    margin: 88px 0 30px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &__logo {
      display: none;
    }
    &__post {
      display: block;
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 18px;
    }
    &__search {
      width: 343px;
      height: 36px;
      border-radius: 10px;
      font-size: 17px;
      line-height: 22px;
    }
  }
}
</style>
