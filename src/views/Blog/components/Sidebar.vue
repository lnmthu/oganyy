<template>
  <div class="col-lg-4 col-md-5">
    <div class="blog__sidebar">
      <div class="blog__sidebar__item">
        <h4>Thể loại</h4>
        <ul>
          <li v-for="(value, index) in listBlogCategory" :key="index">
            <router-link
              tag="a"
              :to="{
                name: 'listBlogOfCategory',
                params: { id: value.id },
              }"
              >{{ value.title }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="blog__sidebar__item">
        <h4>Blog mới nhất</h4>
        <div
          class="blog__sidebar__recent"
          v-for="(value, index) in getListBlogNewest()"
          :key="index"
        >
          <router-link
              tag="a"
            class="blog__sidebar__recent__item"
            :to="{ name: 'detailBlog', params: { id: value.id } }"
          >
            <div class="blog__sidebar__recent__item__pic">
              <img :src="value.image" alt="" />
            </div>
            <div class="blog__sidebar__recent__item__text">
              <h6 v-html="value.title">
                
              </h6>
              <span>{{ formatDate(value.created_at) }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from 'moment'
export default {
  computed: {
    ...mapGetters(["listBlogCategory", "listBlogItems"]),
  },
  created() {
    this.$store.dispatch("loadListBlogCategory");
    this.$store.dispatch("loadListBlogItems");
  },
//   watch:{
//       listBlogItems:function(){
//           console.log(this.listBlogItems)
//       }
//   },
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
      return moment(date).format('YYYY-MM-DD [at] hh:mm');
    },
  },
};
</script>

<style scoped>
</style>