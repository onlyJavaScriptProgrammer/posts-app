<template>
  <div class="pagination">
    <pagination-prevarrow @click="prevPage" v-if="this.currentPage !== 1" />
    <ul class="pagination__list">
      <li
        class="pagination__list_page"
        v-for="page in getSize"
        :key="page"
        @click="setPage(page)"
        :class="{ pagination__list_page_active: this.currentPage === page }"
      >
        {{ page }}
      </li>
    </ul>
    <pagination-nextarrow
      @click="nextPage"
      v-if="this.currentPage !== this.$store.state.size"
    />
  </div>
</template>

<script>
import pagination from "../../mixins/pagination";
import PaginationPrevarrow from "./pagination-prevarrow.vue";
import PaginationNextarrow from "./pagination-nextarrow.vue";
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  mixins: [pagination],
  components: {
    PaginationPrevarrow,
    PaginationNextarrow,
  },
  computed: {
    ...mapGetters(["getSize"]),
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    &_page {
      display: block;
      width: 32px;
      height: 32px;
      background: transparent;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      font-weight: 700;
      font-size: 14px;
      line-height: 28px;
      color: #000000;
      text-align: center;
      margin: 0 4px;
      cursor: pointer;
      &_active {
        border: 1px solid #ff008a;
        color: #ff008a;
      }
    }
  }
}
</style>
