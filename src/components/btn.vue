<template>
  <div class="btn-wrapper">
    <button type="submit" class="btn">sendto@skyrocket.org</button>
  </div>
</template>

<script>
export default {
name: "btn"
}
</script>

<style scoped>
.btn{
  background-color: transparent;
  outline: 2px solid white;
  border: none;
  white-space: nowrap;
  margin-top: 17%;
  color: white;
  padding: 20px 70px;
  font-size: 20px;
  transition: .4s ease 0s;
}
.btn:hover{
  background-color: white;
  opacity: 0.8;
  color: black;
}
@media screen and (max-width: 1120px) {
  .btn{
    padding: 10px 30px;
    font-size: 10px;
    margin-top: 7%;
  }
}
</style>