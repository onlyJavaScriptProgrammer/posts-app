<template>
  <div class="error">Страница не найдена</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Error",
  mounted() {
    this.changeError();
  },
  unmounted() {
    this.changeError();
  },
  methods: {
    ...mapMutations(["changeError"]),
  },
};
</script>

<style lang="scss">
.error {
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  color: #000000;
  margin-top: 50px;
}
</style>
