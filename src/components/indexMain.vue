<template>
<div class="indexMain">
  <banner-tab></banner-tab>
  <content-tab></content-tab>
</div>
</template>

<script>
import bannerTab from "./banner.vue";
import contentTab from "./content.vue";
export default {
  name: "index",
  
  components: {
    contentTab,
    bannerTab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
