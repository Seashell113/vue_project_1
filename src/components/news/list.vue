<template>
<div>
    <nav-bar title="list" />

  <ul>
    <li v-for="news in newsList" :key="news.id">
      <router-link :to="{name: 'news.detail',query: {id:news.id}}">
        1
      </router-link>

    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            newsList: [
              {id:"1",content:"testcontent1",title:"newTitle1"},
              {id:"2",content:"testcontent2",title:"newTitle2"},
              {id:"3",content:"testcontent3",title:"newTitle3"}
            ]
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
