<template>
  <div class="contact-form spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact__form__title">
            <h2>Leave Message</h2>
          </div>
        </div>
      </div>
      <p v-if="success" class="success">{{success}}</p>
        <ValidationObserver v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
                <div class="row">
          <div class="col-lg-6 col-md-6">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="{ errors }"
            >
              <input type="text" v-model.lazy="postForm.name" placeholder="Your name" />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="col-lg-6 col-md-6">
            <ValidationProvider
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                v-model.lazy="postForm.email"
                type="text"
                placeholder="Your Email"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="col-lg-12 text-center">
               <ValidationProvider
              name="Message"
              rules="required"
              v-slot="{ errors }"
            >
            <textarea v-model.lazy="postForm.message" placeholder="Your message"></textarea>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
      <button type="submit" :disabled="invalid" class="site-btn">SEND MESSAGE</button>
          </div>
        </div>
      </form>
        </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
extend("email", {
    ...email,
  message: "{_field_}  is not valid",
});
extend("required", {
  ...required,
  message: "{_field_} is required",
});
export default {
    data(){
        return {
            postForm:{
                name:null,
                email:null,
                message:null
            },
              success:null,
        }
    },
    methods:{
        onSubmit(){
            this.$http.post("http://laravue.test/api/contact",this.postForm).then((response) => {
              this.success="Message was sent"
        }, (error) => { console.log(error) });
    },
        }
};
</script>

<style scoped>

.error {
  display: block;
  color:red;
  margin-bottom: 20px;
  margin-left: 20px;
}
.success{
  color:chartreuse
}

</style>