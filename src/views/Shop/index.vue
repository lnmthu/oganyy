<template>
  <div>
    <Hero />
    <BreadCrumb />
    <section class="product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-5">
            <Sidebar
            />
          </div>
          <div class="col-lg-9 col-md-7">
            <DiscountProduct />
            <router-view/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb";
import Hero from "../../components/Hero/Other";
import Sidebar from "./components/Sidebar";
import DiscountProduct from "./components/DiscountProduct";

export default {

  components: {
    BreadCrumb,
    Hero,
    Sidebar,
    DiscountProduct,
  },
  


};
</script>

<style scoped>
</style>