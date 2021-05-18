<template>
  <div class="socials mt-5">
    <div class="">
      <i class="fab fa-twitter p-2 m-2"></i>
      <i class="fab fa-linkedin-in p-2 m-2"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "socialIcons"
}
</script>

<style scoped>

.fab{
  background-color: white;
  color: black;
  border-radius: 50%;
  font-size: 30px;
}
@media screen and (max-width: 1120px) {
  .fab{
    font-size: 15pt;
  }
}
</style>