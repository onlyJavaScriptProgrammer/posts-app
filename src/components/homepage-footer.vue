<template>
  <footer class="footer">
    <div class="footer__text">2021 copyright all rights reserved</div>
  </footer>
</template>

<script>
export default {
  name: "homepage-footer",
};
</script>

<style lang="scss">
.footer {
  max-height: 88px;
  border-top: 1px solid #e8e8e8;
  padding: 30px 93px 39px;
  &__text {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
}
</style>
