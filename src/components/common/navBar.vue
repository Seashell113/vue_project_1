<template>
    <div>
        <button type="button" @click="goBack">&lt; back</button>
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        props: ['title'],
        methods: {
          goBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
button {
  position: absolute;
  left: 10px;
  top: 15px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  background: transparent;
}
  p {
    font-size: 20px;
    display: inline-block;
  }
  div{
    position: relative;
    text-align: center;
    padding: 10px 0;
    background: #fafafa;
  }
</style>
