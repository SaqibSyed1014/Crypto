<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto mx-5 my-3">
          <li class="nav-item dropdown px-3">
            <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" @click="getListItems">  Listing Strategies  </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/form" id="lisItem"> BTC </router-link></li>
            </ul>
          </li>
          <li class="nav-item px-3" v-if="isLoggedIn">
            <a @click="logout">Logout</a>
          </li>
          <li class="nav-item px-3" v-if="!isLoggedIn">
            <router-link class="nav-link text-white" to="/login">Login</router-link>
          </li>
          <li class="nav-item px-3" v-if="!isLoggedIn">
            <router-link class="nav-link text-white" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/posts">Posts</router-link> |-->
<!--    <span v-if="isLoggedIn">-->
<!--      <a @click="logout">Logout</a>-->
<!--    </span>-->
<!--    <span v-else>-->
<!--      <router-link to="/register">Register</router-link> |-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </span>-->
<!--  </div>-->
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async getListItems(){
      await this.$store.dispatch('getExchangeList')
      console.log('dispatched getExchangeList action')
      // console.log(this.$store.state.authModule.short_code)
    },
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
ul .nav-item{
  font-size: 15pt;
}
</style>
