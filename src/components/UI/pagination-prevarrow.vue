<template>
  <div class="prev">
    <div class="prev__element prev__element_up"></div>
    <div class="prev__element prev__element_down"></div>
  </div>
</template>

<script>
export default {
  name: "PrevArrow",
};
</script>

<style lang="scss" scoped>
.prev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  &__element {
    height: 3px;
    width: 16px;
    background: #e2e2e2;
    &_up {
      margin-bottom: 6px;
      transform: rotate(-45deg);
    }
    &_down {
      transform: rotate(45deg);
    }
  }
}
</style>
