<template>
  <div class="comment">
    <img src="../../assets/commentator.svg" alt="profile" class="comment_img" />
    <div class="comment__info">
      <div class="comment__info_name">{{ author }}</div>
      <div class="comment__info_text">{{ commentBody }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts-comments",
  props: {
    commentBody: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.comment {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    &_name {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 10px;
    }
    &_text {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #3c3c4399;
    }
  }
}
</style>
