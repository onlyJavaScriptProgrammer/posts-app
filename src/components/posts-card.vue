<template>
  <div class="card">
    <img src="../assets/card_img.png" alt="image" class="card__img" />
    <div class="card__title">{{ title }}</div>
    <div class="card__descr">
      {{ body }}
    </div>
    <div class="card__footer">
      <div class="card__footer_comments">
        <img
          src="../assets/comments.svg"
          alt="comments"
          class="card__footer_img"
        />
        <div class="card__footer_text">5</div>
        <!-- Передаю статические данные: во всех постах длина массива с комменатриями равна 5 -->
      </div>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card__footer_edit"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.4374 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20.0001 4.91217 20.0001 5.56508C20.0001 6.21799 19.7407 6.84416 19.279 7.30584L7.95751 18.6238C7.25902 19.4295 6.2689 19.9245 5.1346 20.0023H0V19.0023L0.00324765 14.7873C0.0884382 13.7328 0.578667 12.7523 1.3265 12.0934L12.6954 0.724628C13.1564 0.26083 13.7834 0 14.4374 0ZM5.06398 18.0048C5.59821 17.967 6.09549 17.7184 6.49479 17.2616L14.0567 9.69972L10.3023 5.94519L2.6961 13.5496C2.29095 13.9079 2.04031 14.4092 2 14.8678V18.0029L5.06398 18.0048ZM11.7167 4.53115L15.4709 8.2855L17.8648 5.89162C17.9514 5.80502 18.0001 5.68756 18.0001 5.56508C18.0001 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4374 2C14.3158 2 14.1992 2.04855 14.1136 2.13486L11.7167 4.53115Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts-card",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 309px;
  height: 430px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  cursor: pointer;
  &__img {
    width: 309px;
    height: 250px;
    margin-bottom: 16px;
  }
  &__title,
  &__descr {
    width: 100%;
    text-align: left;
    padding-left: 16px;
  }
  &__title {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    margin-bottom: 8px;
  }
  &__descr {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #3c3c4399;
    overflow: hidden;
    margin-bottom: 22px;
  }
  &__footer {
    width: 309px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 8px 16px;
    &_text {
      margin-left: 12px;
    }
    &_comments {
      display: flex;
      align-items: center;
      margin-right: 34px;
    }
  }
}

@media (max-width: 376px) {
  .card {
    width: 343px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #e2e2e2;
    padding: 32px 0 16px 0;
    &__title {
      font-size: 24px;
      line-height: 28px;
    }
    &__descr {
      font-size: 17px;
      line-height: 22px;
    }
  }
}
</style>
