<template>
  <button class="save">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "save-button",
};
</script>

<style lang="scss">
.save {
  font-family: "Manrope", sans-serif;
  width: 325px;
  height: 50px;
  border-radius: 5px;
  background: #ff008a;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
