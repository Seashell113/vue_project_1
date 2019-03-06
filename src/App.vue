<template>
  <div id="app">
    <mt-header title="hahahah"></mt-header>
    <router-view />
    <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img slot="icon" src="./assets/image/shouye.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="member">
      <img slot="icon" src="./assets/image/wode.png">
      会员
    </mt-tab-item>
    <mt-tab-item id="shopcart">
      <img slot="icon" src="./assets/image/gouwu.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="search">
      <img slot="icon" src="./assets/image/lishi.png">
      查找
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ""
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

</style>
