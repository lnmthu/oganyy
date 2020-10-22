<template>
  <div class="col-lg-8 col-md-7">
    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-6"
        v-for="(value, index) in listBlogItemsPaginate"
        :key="index"
      >
        <div class="blog__item">
          <div class="blog__item__pic">
            <img :src="value.image" alt="" />
          </div>
          <div class="blog__item__text">
            <ul>
              <li>
                <i class="fa fa-calendar-o">{{
                  formatDate(value.created_at)
                }}</i>
              </li>
            </ul>
            <h5>
              <router-link
              tag="a"
                :to="{ name: 'detailBlog', params: { id: value.id } }"
                v-html="value.title"
              ></router-link>
            </h5>
            <p v-html="value.description"></p>
            <router-link
              tag="a"
              :to="{ name: 'detailBlog', params: { id: value.id } }"
              class="blog__btn"
              >Xem thêm <span class="arrow_right"></span
            ></router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="product__pagination blog__pagination">
          <v-pagination
            v-show="numberPaginate.total > 0"
            v-model="listQuery.page"
            :page-count="numberPaginate.last_page"
            :classes="bootstrapPaginationClasses"
            :labels="paginationAnchorTexts"
            @change="loadListBlogItemsPaginate"
          ></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      listQuery: {
        limit: 5,
        page: 1,
      },
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link",
      },
      paginationAnchorTexts: {
        first: "First",
        prev: "Previous",
        next: "Next",
        last: "Last",
      },
    };
  },
  computed: {
    ...mapGetters(["listBlogItemsPaginate", "numberPaginate"]),
  },

  created() {
    this.loadListBlogItemsPaginate();
  },
  watch: {
    $route(to, from) {
      this.listQuery.page = 1;
      this.loadListBlogItemsPaginate();
    },
  },
  methods: {
    loadListBlogItemsPaginate() {
      this.$store.dispatch("loadListQuery", this.listQuery);
      this.$store.dispatch("loadListBlogItemsPaginate");
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD [at] hh:mm");
    },
  },
};
</script>

<style scoped>
</style>