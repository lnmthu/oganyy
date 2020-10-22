<template>
  <section class="related-product">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title related__product__title">
            <h2>Sản phẩm liên quan</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6"
          v-for="(value, index) in getReloatedList()"
          :key="index"
        >
          <div class="product__item">
            <div
              class="product__item__pic set-bg"
              :style="{ backgroundImage: 'url(' + value.image_uri + ')' }"
            >
              <ul class="product__item__pic__hover">
                <li>
                  <a href="#"><i class="fa fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-retweet"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-shopping-cart"></i></a>
                </li>
              </ul>
            </div>
            <div class="product__item__text">
              <h6>
                <router-link
                  tag="a"
                  :to="{
                    name: 'detailProduct',
                    params: { unique_id: value.unique_id },
                  }"
                  >{{ value.name }}</router-link
                >
              </h6>
              <h5>{{ value.price }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listProduct", "currentProduct"]),
  },
  methods: {
    getReloatedList() {
      var newArr = [];
      for (let product of this.listProduct) {
        console.log(product);
        if (
          product.category_unique_id ==
            this.currentProduct.category_unique_id &&
          product.unique_id != this.currentProduct.unique_id
        )
          newArr.push(product);
      }
      return newArr.splice(0, 3);
    },
  },
};
</script>

<style scoped>
</style>