<template>
  <div>
    <Hero />
    <BreadCrumb />
     <section class="blog spad">
        <div class="container">
            <div class="row">
              <Sidebar />
                <router-view/>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb";
import Hero from "../../components/Hero/Other";
import Sidebar from "./components/Sidebar";

export default {

  components: {
    BreadCrumb,
    Hero,
    Sidebar,
  },
};
</script>

<style scoped>
</style>