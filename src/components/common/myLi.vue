<template>
    <li>
      <slot></slot>
    </li>
</template>

<script>
    export default {
        name: "my-li",
        data(){
          return {

          }
        }
    }
</script>

<style scoped>
  li {
    width: 33%;
    float: left;
    text-align: center;
    height: 100px;
    margin-bottom: 10px;
  }
</style>
