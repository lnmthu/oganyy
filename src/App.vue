<template>
  <div id="app">
    <MenuWrapper />
    <Header />
      <keep-alive>
        <router-view />
      </keep-alive>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import MenuWrapper from "./components/MenuWrapper/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "app",
  components:{
    MenuWrapper,
    Header,
    Footer
  }

};
</script>

<style>
/* @import '../dist/css/fontapis.css';
@import '../dist/css/bootstrap.min.css';
@import '../dist/css/font-awesome.min.css';
@import '../dist/css/elegant-icons.css';
@import '../dist/css/nice-select.css';
@import '../dist/css/jquery-ui.min.css';
@import '../dist/css/owl.carousel.min.css';
@import '../dist/css/slicknav.min.css'; */
@import "../dist/css/style.css";
</style>>
