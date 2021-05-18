<template>
  <video playsinline autoplay muted loop id="bg-video">
    <source :src='require("@/assets/bg-vid.mp4")' type='video/mp4'>
  </video>
</template>

<script>
export default {
  name: "backgroundVideo"
}
</script>

<style scoped>
video {
  display: block;
  width: 100%;
  height: 100%;
  /*position: fixed;*/
}
</style>