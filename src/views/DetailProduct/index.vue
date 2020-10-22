<template>
  <div>
    <Hero />
    <BreadCrumb />
    <DetailProduct />
    <RelatedProduct />
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import DetailProduct from "./components/DetailProduct";
import RelatedProduct from "./components/RelatedProduct";
export default {
  components: {
    Hero,
    BreadCrumb,
    DetailProduct,
    RelatedProduct,
  },
  created(){
    this.$store.dispatch("loadCurrentProduct",this.$route.params.unique_id);
    this.$store.dispatch("loadListProduct")
  },
    watch:{
    $route(to,from){
      this.$store.dispatch("loadCurrentProduct",to.params.unique_id);
    }
  }
  


};
</script>

<style scoped>
</style>