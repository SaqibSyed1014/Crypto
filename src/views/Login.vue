<template>
  <form>
    <div class="login-form-wrapper my-5">
      <h3 class="text-center mb-5">Login Form</h3>
      <div class="form-group row mb-4">
        <label for="UserName" class="col-5 col-form-label text-center">Enter Email: </label>
        <div class="col-7">
          <input v-model="email" class="form-control w-75" type="email" id="userName">
        </div>
      </div>
      <div class="form-group row mb-4">
        <label for="password" class="col-5 col-form-label text-center">Enter Password: </label>
        <div class="col-7">
          <input v-model="password" class="form-control w-75" type="password" id="password">
        </div>
      </div>
      <h4 class="errorMsg text-center" id="errorMsg"></h4>
      <div class="text-center my-4">
        <button type="button" @click="submittingLogInForm" class="btn btn-dark">Log In</button>
      </div>
    </div>
  </form>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: '',
      password: '',
      error: false
    };
  },
  methods: {
    // ...mapActions(["LogIn"]),
    async submittingLogInForm() {
      if(this.email == '' || this.password == ''){
        this.error =  true
      }
      else {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push("/")
        console.log('dispatched login action')
      }
      // const User = new FormData();
      // User.append("username", this.form.username);
      // User.append("password", this.form.password);
      // try {
      //     await this.LogIn(User);
      //     this.$router.push("/posts");
      //     this.showError = false
      // } catch (error) {
      //   this.showError = true
      // }
    },
  },
};
</script>

<style scoped>

</style>
