<template>
  <div class="indexContent">
    <!-- <span class="price">${{ products.price }}</span> -->
    <!-- <button @click="minusPrice">减少价格</button>
    <button @click="minusPriceAsync">异步减少价格</button> -->
    ??
    <div>
      <ul v-for="(inputValue, index) in inputValues" :key="index">
        <li>
          {{ inputValue.input1 }}
        </li>
        <li>
          {{ inputValue.input2 }}
        </li>
        <li>
          {{ inputValue.input3 }}
        </li>
      </ul>
    </div>
    <div class="cont w1000">
      <div class="title">
        <span class="layui-breadcrumb" lay-separator="|">
          <a href="javascript:;" class="active">设计文章</a>
          <a href="javascript:;">前端文章</a>
          <a href="javascript:;">旅游杂记</a>
        </span>
      </div>
      <div v-for="(articleList, index) in articleLists" :key="index">
        <div class="list-item">
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img">
                  <img :src="articleList.src" alt>
                </div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>
                    {{ articleList.subTitle }}
                    <button class="layui-btn layui-btn-danger new-icon">new</button>
                  </h3>
                  <h5>{{ articleList.title }}</h5>
                  <p>{{ articleList.desc }}</p>
                  <!-- <router-link to="/detail/2"><a href="javascript:;" class="go-icon"></a></router-link> -->
                  <router-link :to="{path: 'detail',query: {id: '1'}}"><a href="javascript:;" class="go-icon"></a></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id="demo" style="text-align: center;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexContent",
  data() {
    return {
      articleLists: [],
      inputValues:[]
    };
  },
  // data() {
  //   return {
  //     products: this.$store.state.products //获取状态(不是getters)
  //   };
  // },
  created () {
    this.$http.post('http://localhost:3000/api/content').then((response) => {
      // console.log(response.body)
      this.articleLists = response.body
    })
    console.log();
    this.inputValues = this.$store.state.inputValues
  },
  mounted() {
    layui.use(["element", "laypage"], function() {
      var element = layui.element,
          laypage = layui.laypage;
      laypage.render({
        elem: "demo",
        count: 70 //数据总数，从服务端得到
      });
    });
  },
  methods: {
    minusPrice() {
      this.$store.commit("minusPrice", 2);
    },
    minusPriceAsync(){
      this.$store.dispatch('minusPriceAsync',2)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
