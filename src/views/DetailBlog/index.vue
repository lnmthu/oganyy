<template>
  <div>
    <Hero />
    <BreadCrumb />
    <section class="blog-details spad">
      <div class="container">
        <div class="row">
              <Sidebar />
          <DetailBlog />
        </div>
      </div>
    </section>
    <RelatedBlog/>
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import Sidebar from "../Blog/components/Sidebar";
import DetailBlog from "./components/DetailBlog";
import RelatedBlog from "./components/RelatedBlog";
export default {
  components: {
    Hero,
    BreadCrumb,
    Sidebar,
    DetailBlog,
    RelatedBlog,
  },
  created() {
    this.$store.dispatch("loadCurrentBlog", this.$route.params.id);
    this.$store.dispatch("loadListBlogItems");
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("loadCurrentBlog", to.params.id);
    },
  },
};
</script>

<style scoped>
</style>