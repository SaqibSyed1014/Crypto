<template>
  <div class="">
    <div class="body-wrapper">
      <background-video/>
      <div class="container">
        <div class="content-body text-center my-3">
          <content-headings class="my-5"/>
          <btn/>
          <social-icons/>
        </div>
      </div>
    </div>
    <simple-footer/>

  </div>

</template>

<script>
import backgroundVideo from "../components/background-video"
import contentHeadings from "../components/content-headings"
import btn from "../components/btn"
import socialIcons from "../components/social-icons"
import simpleFooter from "../components/simple-footer"


export default {
  name: "Home",
  components: {
    backgroundVideo,
    contentHeadings,
    btn,
    socialIcons,
    simpleFooter,
  },
  data(){
    return{
      chartData: null,
      chartOptions: null,
    }
  },
  methods: {

    }
};
</script>
<style scoped>
.body-wrapper{
  position: relative;
}
.content-body{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
}
@media screen and (max-width: 1120px) {
  .content-body{

  }
}
</style>
