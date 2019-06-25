<template>
  <div class="banner">
  <h1>{{ products.price }}</h1>
    <div class="cont w1000">
      <div class="title">
        <h3>
          MY<br>BLOG
        </h3>
        <h4>well-balanced heart</h4>
      </div>
      <div class="amount">
        <p>
          <span class="text">访问量</span>
          <span class="access">1000</span>
        </p>
        <p>
          <span class="text">日志</span>
          <span class="daily-record">1000</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      products: this.$store.getters.saleProducts
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
