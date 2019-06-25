<template>
  <div class="albumContentIndex">
      <album-content></album-content>
  </div>
</template>

<script>
import albumContent from './albumContent'
export default {
  name: 'albumContentIndex',
  data () {
    return {
      msg: ''
    }
  },
  components:{
      albumContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
