<template>
  <section class="from-blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title from-blog__title">
            <h2>Blog mới nhất</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6"
          v-for="(value, index) in getListBlogNewest()"
          :key="index"
        >
          <div class="blog__item">
            <div class="blog__item__pic">
              <img :src="value.image" alt="" />
            </div>
            <div class="blog__item__text">
              <ul>
                <li>
                  <i class="fa fa-calendar-o"></i>
                  {{ formatDate(value.created_at) }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  computed: {
    ...mapGetters(["listBlogCategory", "listBlogItems"]),
  },
  created() {
    this.$store.dispatch("loadListBlogCategory");
    this.$store.dispatch("loadListBlogItems");
  },
  methods: {
    getPublicBlog() {
      var newArr = [];
      for (let blog of this.listBlogItems)
        if (blog.status == "1") newArr.push(blog);
      return newArr.splice(0, 3);
    },
    getListBlogNewest() {
      var newArr = [];
      var length = this.listBlogItems.length;
      var data = null;
      for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
          if (
            new Date(this.listBlogItems[i].created_at) <
            new Date(this.listBlogItems[j].created_at)
          ) {
            let temp = this.listBlogItems[i];
            this.listBlogItems[i] = this.listBlogItems[j];
            this.listBlogItems[j] = temp;
          }
        }
      }
      return this.getPublicBlog();
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD [at] hh:mm");
    },
  },
};
</script>

<style scoped>
</style>