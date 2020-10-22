<template>
  <div>
    <Hero />
    <BreadCrumb />
    <Contact/>
    <Map/>
    <ContactForm/>
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import Contact from "./components/Contact";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";
export default {
  components: {
    Hero,
    BreadCrumb,
    Contact,
    Map,
    ContactForm
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