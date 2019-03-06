<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <router-link :to="grid.router">
            <span class="cms-news" :class="grid.className"></span>
            <p>{{grid.title}}</p>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs:[],
      grids: [
        {className: "cms-news1",title: "News1",router:{name:"news.list"}}
        ,{className: "cms-news2",title: "News2",router:{name:"news.list"}}
        ,{className: "cms-news3",title: "News3",router:{name:"news.list"}}
        ,{className: "cms-news4",title: "News4",router:{name:"news.list"}}
        ,{className: "cms-news5",title: "News5",router:{name:"news.list"}}
        ,{className: "cms-news6",title: "News6",router:{name:"news.list"}}
        ,{className: "cms-news4",title: "News4",router:{name:"news.list"}}
        ,{className: "cms-news5",title: "News5",router:{name:"news.list"}}
        ,{className: "cms-news6",title: "News6",router:{name:"news.list"}}
      ]
    }
  },
  created(){
    this.$axios.get('getlunbo')
      .then(res => {
        this.imgs = res.data.message;
      }).catch(err => {
        console.log(err);
        this.imgs = [
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552463697&di=58c30ec3f496705b1514f88168550bdb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150604%2F0008118270421755_b.jpg"
          },
          {
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551868982221&di=a3e5a9c6f605c0de20d753050740a3ea&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160727%2F0008118089135379_b.jpg"
          }
        ]
    })
  }
}
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  .cms-news1 {
    background: url("../../assets/image/linggan.png");
  }
  .cms-news2 {
    background: url("../../assets/image/anquan.png");
  }
  .cms-news3 {
    background: url("../../assets/image/bianji.png");
  }
  .cms-news4 {
    background: url("../../assets/image/dengdai.png");
  }
  .cms-news5 {
    background: url("../../assets/image/dianhua.png");
  }
  .cms-news6 {
    background: url("../../assets/image/dingwei.png");
  }

  .cms-news {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-size: cover;
    margin: 15px 0;
  }
  .grid ul > li  p {
    width: 100%;
    line-height: 20px;
  }
  .grid ul > li > a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #7f7f7f;
  }

</style>
