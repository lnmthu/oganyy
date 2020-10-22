<template>
  <div>
    <Hero />
    <Category />
    <FeaturedProduct />
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src="dist/img/banner/banner-1.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src="dist/img/banner/banner-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <FilterProduct/>
    <NewestBlog />
  </div>
</template>

<script>
import Hero from "../../components/Hero/Home";
import Category from "./components/Categories";
import FeaturedProduct from "./components/FeaturedProduct";
import FilterProduct from "./components/FilterProduct";
import NewestBlog from "./components/NewestBlog";

export default {

  components: { 
    Hero, 
    Category, 
    FeaturedProduct, 
    FilterProduct,
    NewestBlog
    },
    created(){
      this.$store.dispatch("loadListProduct");
      this.$store.dispatch("loadListCategory");
    },


};
</script>

<style  scoped>
</style>