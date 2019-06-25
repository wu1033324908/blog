<template>
  <div class="detialContentIndex">
    <div>
      <input type="text" class="layui-input" v-model="inputdata.input1" value='1'>
      <input type="text" class="layui-input" v-model="inputdata.input2" value='2'>
      <input type="text" class="layui-input" v-model="inputdata.input3" value='3'>
      <button class="layui-btn" @click="save">aaaaaaaaa</button>
    </div>
    <detial-content></detial-content>
  </div>
</template>

<script>
import detialContent from './detialContent'
export default {
  name: 'detialContentIndex',
  data () {
    return {
      inputdata:{
        input1:'',
        input2:'',
        input3:''
      }
    }
  },
  components:{
      detialContent
  },
  methods:{
    save(){
      // console.log(this.inputdata);
      // this.$emit("sendInputdataEvent",this.inputdata)
      console.log(this.$route); 
      this.$store.dispatch("getInputValuesAsync", this.inputdata);
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
