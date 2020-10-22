<template>
  <section class="related-blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title related-blog-title">
            <h2>Blog liên quan</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6"
          v-for="(value, index) in getReloatedList()"
          :key="index"
        >
          <div class="blog__item">
            <div class="blog__item__pic">
              <img :src="value.image" alt="" />
            </div>
            <div class="blog__item__text">
              <ul>
                <li>
                  <i class="fa fa-calendar-o"></i
                  >{{ formatDate(value.created_at) }}
                </li>
              </ul>
              <h5>
                <router-link
                  tag="a"
                  :to="{ name: 'detailBlog', params: { id: value.id } }"
                  v-html="value.title"></router-link
                >
              </h5>
              <p v-html="value.description">
              </p>
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
    ...mapGetters(["listBlogItems", "currentBlog"]),
  },
  methods: {
    getReloatedList() {
      var newArr = [];
      for (let blog of this.listBlogItems) {
        console.log(blog);
        if (
          blog.blog_category_id == this.currentBlog.blog_category_id &&
          blog.id != this.currentBlog.id
        )
          newArr.push(blog);
      }
      return newArr.splice(0, 3);
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD [at] hh:mm");
    },
  },
};
</script>

<style scoped>
</style>