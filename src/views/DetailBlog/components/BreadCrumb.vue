<template>
<section class="blog-details-hero set-bg" data-setbg="dist/img/blog/details/details-hero.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog__details__hero__text">
                        <h2 v-html="currentBlog.title"></h2>
                        <ul>
                            <!-- <li>By {{currentBlog.user}}</li> -->
                            <li>{{ formatDate(currentBlog.created_at) }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
import moment from "moment";

export default {
computed:{
    ...mapGetters(["currentBlog"])
},
methods:{
   formatDate(date) {
      return moment(date).format("YYYY-MM-DD [at] hh:mm");
    },
}

};
</script>

<style scoped>
</style>