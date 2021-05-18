<template>
  <form>
    <div class="signup-form-wrapper my-5">
      <h3 class="text-center mx-3 mb-5">Sign-Up Form</h3>
      <div class="form-group row mb-4">
        <label for="firstName" class="col-5 col-form-label text-center">Enter First Name: </label>
        <div class="col-7">
          <input v-model="firstName" class="form-control w-75" type="text" id="firstName">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="lastName" class="col-5 col-form-label text-center">Enter Last Name: </label>
        <div class="col-7">
          <input v-model="lastName" class="form-control w-75" type="text" id="lastName">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="email" class="col-5 col-form-label text-center">Enter Email: </label>
        <div class="col-7">
          <input v-model="email" class="form-control w-75" type="email" id="email">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="password" class="col-5 col-form-label text-center">Enter Password: </label>
        <div class="col-7">
          <input v-model="password" class="form-control w-75" type="password" id="password">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="apiKeySignUp" class="col-5 col-form-label text-center">Enter API Key: </label>
        <div class="col-7">
          <input v-model="userApiKey" class="form-control w-75" type="text" id="apiKeySignUp">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="secretKeySignUp" class="col-5 col-form-label text-center">Enter Secret Key: </label>
        <div class="col-7">
          <input v-model="userSecretKey" class="form-control w-75" type="text" id="secretKeySignUp">
        </div>
      </div>
      <h4 class="errorMsg text-center" v-if="errorMsg">Please fill the entire form!</h4>
      <div class="text-center my-4">
        <button type="button" @click="submitSignUpForm" class="btn btn-dark">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userApiKey: '',
      userSecretKey: '',
      errorMsg: false
    };
  },
  methods: {
    // ...mapActions(["Register"]),
    async submitSignUpForm() {
      if(this.firstName == '' || this.lastName == '' || this.email == '' || this.password == '' || this.userApiKey == '' || this.userSecretKey == ''){
        this.errorMsg = true
        return false
      }
      else {
          await this.$store.dispatch('signup',{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            userApiKey: this.userApiKey,
            userSecretKey: this.userSecretKey
          })
          this.$router.push("/login")
          console.log('dispatched signup action')

      }

      // try {
      //   await this.Register(this.form);
      //   this.$router.push("/posts");
      //   this.showError = false
      // } catch (error) {
      //   this.showError = true
      // }
    },
  },
};
</script>
<style scoped>

</style>
