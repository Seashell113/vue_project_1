<template>
  <div id="app">
    <mt-header title="hahahah"></mt-header>
    <router-view class="tmpl" />
    <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img @click="changeHash" slot="icon" src="./assets/image/shouye.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="member">
      <img @click="changeHash" slot="icon" src="./assets/image/wode.png">
      会员
    </mt-tab-item>
    <mt-tab-item id="shopcart">
      <img @click="changeHash" slot="icon" src="./assets/image/gouwu.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="search">
      <img @click="changeHash" slot="icon" src="./assets/image/lishi.png">
      查找
    </mt-tab-item>
  </mt-tabbar>

  </div>
</template>

<script>
export default {
  data:function() {
    return {
      selected: "",
      test: 1
    }
  },
  updated(){

    //  console.log(1);
   // console.log(this.selected);
    // this.$router.push({
    //   name: this.selected
    // })
  },
  methods: {

     changeHash(){
    // =========problems wait for solve
    //   this.$nextTick(function (){
    //    console.log(this.selected,2);
    //     this.$router.push({
    //       name: this.selected
    //     })
    //  })

        console.log(this.selected,1)
      // setTimeout(()=>{
      //   console.log(this.selected,2);
      // })
    },
    changeTest(){
      console.log(this.test);
      this.$nextTick(function () {
        console.log(this.test);
      })
      this.test = 2;
    }
  },
  watch: {
   selected(newV,oldV) {
      console.log(newV);
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
.tmpl {
  height: calc(100vh - 95px);
  overflow: auto;
}
</style>
