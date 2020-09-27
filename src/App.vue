<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {post} from './assets/js/ajaxResource'
import {put} from './assets/js/ajaxResource'
export default {
  name: 'App',
  data(){
    return{
      footerChange:1
    }
  },
  methods:{
    //token保活
    keepToken(){
      if(localStorage['token'] !='undefined'){
        put('/api/videoService/accounts/token/keepalive',{
          "token":localStorage['token']
        }).then(function(res){
          console.log(res.message)
        })
      }
    }
  },
  mounted:function(){
    setInterval(() => {
      this.keepToken();
      const newtime = new Date()
      console.log(newtime.getTime())
      console.log("123")
    }, 50000);
  }
}
</script>

<style>

</style>
