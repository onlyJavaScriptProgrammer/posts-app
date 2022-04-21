<template>
  <div class="icon">
    <div class="icon__first"></div>
    <div class="icon__second"></div>
    <div class="icon__third"></div>
  </div>
</template>

<script>
export default {
  name: "posts-icon",
};
</script>

<style lang="scss">
.icon {
  &__first {
    width: 20px;
    height: 12px;
    border: 2px solid #ff008a;
    border-radius: 2px;
    margin-bottom: 2px;
  }
  &__second,
  &__third {
    width: 20px;
    height: 2px;
    background: #ff008a;
    margin-bottom: 2px;
  }
}
</style>
