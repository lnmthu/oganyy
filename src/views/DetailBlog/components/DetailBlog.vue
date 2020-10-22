<template>
  <div class="col-lg-8 col-md-7 order-md-1 order-1">
    <div class="blog__details__text">
      <h3 v-html="currentBlog.description">
      </h3>
      <img :src="currentBlog.image" alt="" />
      <p v-html="currentBlog.body">
      </p>
      

    </div>
    <div class="blog__details__content">
      <div class="row">
        <div class="col-lg-6">
          <div class="blog__details__author">
            <div class="blog__details__author__pic">
              <img src="dist/img/blog/details/details-author.jpg" alt="" />
            </div>
            <div class="blog__details__author__text">
              <h6>{{ currentBlog.user.name }}</h6>
              <span>{{ currentBlog.user.roles[0] }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="blog__details__widget">
            <ul>
              <li><span>Thể loại:</span> {{ currentBlog.category.title }}</li>
            </ul>
            <div class="blog__details__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-google-plus"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentBlog"]),
  },
};
</script>

<style scoped>
</style>