<template>
<div>
  <nav-bar title="detail" />
  <h3>{{news.title}}</h3>
  <time>{{news.time | convertTime }}</time>
  <section v-html="news.content"></section>
</div>
</template>

<script>
    export default {
        name: "detail",
      data(){
          return {
            news: {
              title:"news title1",
              time: "2019-03-07",
              content:"<p>test p</p><section>test section<br />test section</section>"
            }
          }
      },
      created(){
        let id=this.$route.query.id
        this.$axios.get("getnew/"+id)
          .then(res=>{
            console.log(res)
          })
          .catch(err=>{
            console.log(err)

          })
      }
    }
</script>

<style scoped>

</style>
