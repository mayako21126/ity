<template>
  <div class="am-g-collapse">
    登陆中
  </div>
</template>
<script type="text/ecmascript-6">
  import $ from 'jquery'
  import {getQueryString,apis} from '../assets/js/app'
  export default {
    data () {
      return {
        price: '',
        num: '',
        title: '',
        type: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        var self =this;
        console.log(location.href);
        var state=getQueryString("state");
        var code = getQueryString("code");
        $.get(apis + "WeiXin_Login.aspx", {
          state: state, code: code
        }, function (res) {
          console.log(res)
          console.log("gogogo")
          //res=JSON.parse(res);
          //wxready()
          self.$router.push('info')
        });

      })
    }
  }
</script>
<style scoped>

</style>
