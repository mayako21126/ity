<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12"
         style="padding-top: 20px;padding-bottom: 20px;padding-left:20px;padding-right: 20px;margin-top: 80px;text-align: center">
      <div>
        <img src="../assets/i/qr.png" class="am-img-thumbnail am-radius" alt="" width="90%">
      </div>
    </div>
    <div class="am-u-sm-12">
      <div style="margin-top: 40px">
        <div class="tip" style="float: left;width: 100%;height: 30px"> <span><img src="../assets/i/tip.png" width="16" alt="">温馨提示</span></div>
        <div style="padding-left: calc(60px + 9%);float: left;width: 100%" >
          asdasd

        </div>
      </div>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
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
        this.$http.post("http://order", {'type': 1}).then(
          (successData)=>
        {
          this.price = successData.body.result.price;
          this.num = successData.body.result.num;
          this.title = successData.body.result.title;
          this.type = successData.body.result.type;

        }
        ,
        (fileData)=>
        {
          console.log(fileData);
        }
        )
        ;

      })
    }
  }
</script>
<style scoped>
  :root {
    --mainColor: red;
    --danger-theme: {
      color: #555555;
      border: 0px solid sienna;
    };
  }

  a {
    color: var(--mainColor);
  }

  span {
    @apply --danger-theme;
  }
  .tip{
    font-size: 16px;
    color: #868bb3;
  }
  .tip span {
    margin-left: 80px;
    color: #868bb3;

  }
  .tip span img{
    vertical-align: text-bottom;
  }


  .tip span:before, .tip span:after {
    content: '';                 /*CSS伪类用法*/
    position: absolute;         /*定位背景横线的位置*/
    margin-top: 13px;
    background: #868bb3;       /*宽和高做出来的背景横线*/
    width: 9%;
    height: 2px;
    font-size: 16px;
    color: #868bb3;
  }
  .tip span:before{
    left: 40px;        /*调整背景横线的左右距离*/
  }
  .tip span:after {
    width: calc(100% - 205px);
    margin-left: 5px;
  }

  .footer .left {
    float: left;
    height: 100%;
    line-height: 60px;
    color: white;
    text-align: left;
  }

  .footer .left span {
    padding-left: 20px;
    color: white;
    text-align: left;
  }

  .qr-btn {
    color: white;
    height: 45px;
    width: 180px;
    /*line-height: 45px;*/
    background-color: #ff5d38;
    text-align: center;
  }

  .footer .right span {
    color: white;
  }

  #ticketDiv {
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  #ticketDiv .ticketInfo {
    padding-top: 20px;

  }

  .ticketInfo .ticketTitle {
    font-size: 16px;
    color: #323232;
  }

  .ticketInfo .ticketContent {
    font-size: 14px;
    color: #959595;
  }

  .ticketInfo .ticketPrice {
    font-size: 16px;
    color: #ff5d38;
  }

  #slider li span {
    position: absolute;
    height: 20px;
    width: 40px;
    text-align: center;
    line-height: 16px;
    margin-left: 10px;
    font-size: 13px;
    margin-top: 10px;
    background-color: rgba(55, 55, 55, 0.6);
    border: 1px solid rgba(55, 55, 55, 0.6);
  }

  #slides img {

  }

  .titleDiv .title span {
    border: none;
  }

  .titleDiv .titleInfo span {
    border: none;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #ececec;
    border-bottom: none;
  }
</style>
