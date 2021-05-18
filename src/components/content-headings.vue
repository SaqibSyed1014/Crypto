<template>
  <div class="content text-center text-white">
    <h1>Trade Automation Solutions</h1>
    <h1>Market Making</h1>
    <h1>Compliance</h1>
  </div>
</template>

<script>
export default {
name: "contentHeadings"
}
</script>

<style scoped>
.content{
  font-family: Roboto;
}
.content h1{
  letter-spacing: 0.2em;
  font-size: 26pt ;
  color: white;
}
@media screen and (max-width: 1120px) {
  .content h1{
    font-size: 15pt;
  }
}
</style>