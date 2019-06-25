<template>
  <div id="app">
    <Header-tab></Header-tab>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
import HeaderTab from './components/Header.vue';
import pageFooter from './components/pageFooter.vue';
export default {
  name: 'App',
  components:{
    HeaderTab,
    pageFooter
  }
}
</script>

<style>

</style>
