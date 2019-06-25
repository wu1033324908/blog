<template>
<div class="MicroLanguageContent">
  <div class="content whisper-content">
    <div class="cont">
      <div class="whisper-list">
        <microLanguage-content-item></microLanguage-content-item>
      </div>
      <!-- <div id="demo" style="text-align: center;"></div> -->
    </div>
  </div>
</div>
</template>

<script>
import MicroLanguageContentItem from './MicroLanguageContentItem'
export default {
  name: 'MicroLanguageContent',
  components: {
    MicroLanguageContentItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
