<template>
<div class="cont">
    <div class="img">
        <img :src="imgUrl" alt="">
    </div>
    <div class="text">
        <p class="tit"><span class="name">{{name}}</span><span class="data">{{dateTime}}</span></p>
        <p class="ct">{{ct}}</p>
    </div>
</div>
</template>

<script>
export default {
    props:["name","dateTime","ct","imgUrl"],
    name: 'HelloWorld',
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
