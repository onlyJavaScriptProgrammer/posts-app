<template>
  <section class="info">
    <img src="../assets/cover.png" alt="cover" class="info__img" />
    <div class="info__title">{{ this.$store.state.title }}</div>
    <hr />
    <div class="info__descr" v-if="!this.getUpdateState">
      {{ this.$store.state.modelTextarea }}
    </div>
    <textarea
      class="info__textarea"
      v-if="this.getUpdateState"
      v-model="body"
    ></textarea>
    <div class="info__btns">
      <save-button
        class="info__btns_save"
        v-if="this.getUpdateState"
        @click="fetchData"
        >Сохранить</save-button
      >
      <cancel-button
        class="info__btns_cancel"
        v-if="this.getUpdateState"
        @click="this.changeUpdate()"
        >Отменить</cancel-button
      >
    </div>
    <div
      class="info__edit"
      v-if="!this.getUpdateState"
      @click="this.changeUpdate()"
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="info__edit_svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.4374 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20.0001 4.91217 20.0001 5.56508C20.0001 6.21799 19.7407 6.84416 19.279 7.30584L7.95751 18.6238C7.25902 19.4295 6.2689 19.9245 5.1346 20.0023H0V19.0023L0.00324765 14.7873C0.0884382 13.7328 0.578667 12.7523 1.3265 12.0934L12.6954 0.724628C13.1564 0.26083 13.7834 0 14.4374 0ZM5.06398 18.0048C5.59821 17.967 6.09549 17.7184 6.49479 17.2616L14.0567 9.69972L10.3023 5.94519L2.6961 13.5496C2.29095 13.9079 2.04031 14.4092 2 14.8678V18.0029L5.06398 18.0048ZM11.7167 4.53115L15.4709 8.2855L17.8648 5.89162C17.9514 5.80502 18.0001 5.68756 18.0001 5.56508C18.0001 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4374 2C14.3158 2 14.1992 2.04855 14.1136 2.13486L11.7167 4.53115Z"
          fill="#FF008A"
        />
      </svg>
      <div class="info__edit_text">Редактировать</div>
    </div>
    <div class="info__comments">
      <div class="info__comments_title">Комментарии</div>
      <div class="info__comments_wrap">
        <posts-comments
          class="info__comments_human"
          v-for="comment in getComments"
          :key="comment.id"
          :commentBody="comment.body"
          :author="comment.email"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "post",
  data() {
    return {
      body: null,
    };
  },
  mounted() {
    this.getAllComments(this.$route.params.id);
    this.setCurrentIndex(this.$route.params.id);
    this.body = this.$store.state.modelTextarea;
  },
  methods: {
    ...mapActions(["getAllComments", "patchData"]),
    ...mapMutations(["changeUpdate", "recordTransitData", "setCurrentIndex"]),
    fetchData() {
      this.recordTransitData(this.body);
      this.patchData(this.$route.params.id, this.$store.state.transitData);
      this.changeUpdate();
    },
  },
  computed: {
    ...mapGetters(["getComments", "getPosts", "getUpdateState"]),
  },
};
</script>

<style lang="scss">
.info {
  &__img {
    margin-bottom: 25px;
  }
  &__title {
    font-weight: 700;
    font-size: 34px;
    line-height: 46px;
    color: #000000;
    margin-bottom: 30px;
  }
  &__descr {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #3c3c4399;
    margin-bottom: 30px;
  }
  &__textarea {
    font-family: "Manrope", sans-serif;
    border: 1px solid #d1d1d6;
    border-radius: 8px;
    width: 100%;
    height: 324px;
    resize: none;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    padding: 20px 95px 40px 20px;
    margin-bottom: 30px;
  }
  &__btns {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &_cancel {
      margin-left: 30px;
    }
  }
  &__edit {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 36px;
    &_svg {
      margin-right: 22px;
    }
    &_text {
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      color: #ff008a;
    }
  }
  &__comments {
    margin-bottom: 221px;
    &_title {
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      color: #000000;
      margin-bottom: 38px;
    }
    &_human {
      margin-bottom: 36px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
hr {
  height: 1px;
  background: #d1d1d6;
  margin-bottom: 30px;
}
</style>
