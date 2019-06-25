<template>
  <div>
    <div class="header">
      <div class="menu-btn">
        <div class="menu"></div>
      </div>
      <h1 class="logo">
        <router-link to="/">
        <a href="javascript:;">
          <span>MYBLOG</span>
          <img src="../assets/img/logo.png">
        </a>
        </router-link>
      </h1>
      <div class="nav">
        <div class="inlineBlock" v-for="(navList, index) in nav.navLists" :key="index" @click="change(index)">
          <router-link :to="{ path:navList.path }" :key="index">
            <a href="javascript:;" :class="nav.activeClass == index ? 'active':''">{{ navList.text }}</a>
          </router-link>
        </div>
      </div>
      <p class="welcome-text">
        欢迎来到
        <span class="name">小明</span>的博客~
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav:{
        activeClass:0,
        navLists: [
          { text: "文章", path:"/" },
          { text: "微语", path:"/MicroLanguage" },
          { text: "留言", path:"/leacots" },
          { text: "相册", path:"/album" },
          { text: "关于", path:"/about" },
        ]
      }
    };
  },
  mounted() {
    this.changeInit()
  },
  methods:{
    change:function(index){
      let _this = this
        this.nav.activeClass = index; 
    },
    changeInit:function(){
        this.nav.navLists.forEach((element,index) => {
          if(element.path == (window.location.hash).replace('#',"")){
            this.nav.activeClass = index
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inlineBlock{
  display: inline-block;
}
</style>
