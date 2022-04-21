<template>
  <button class="cancel">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "cancel-button",
};
</script>

<style lang="scss">
.cancel {
  font-family: "Manrope", sans-serif;
  width: 325px;
  height: 50px;
  border-radius: 5px;
  background: #ffffff;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #ff008a;
  border: 1px solid #ff008a;
  outline: none;
  cursor: pointer;
}
</style>
