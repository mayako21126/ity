<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12"
         style="padding-top: 20px;padding-bottom: 20px;padding-left:20px;padding-right: 20px;margin-top: 80px;text-align: center">
      <div>
        <span style="font-size: 20px;color: #2fae36;"><img src="../assets/i/pays.png" alt="" height="22"
                                                           style="vertical-align: text-top">支付成功</span>
      </div>
      <div style="margin-top: 40px">
        <button type="button" class="am-btn qr-btn am-radius"><router-link to="myTicket" style="color: white;">点击查看票务</router-link></button>
      </div>
      <div style="margin-top: 40px;text-align: center;font-size: 12px;color: #323232;">
        如果您离开此页面<br>可以通过关注公众号i体验来找到二维码
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

  .select-btn {
    background-color: #ff5d38;
    border-color: #ff5d38;
    color: white;
  }

  .am-btn-default:active, .am-btn-default.am-active, .am-dropdown.am-active .am-btn-default.am-dropdown-toggle {
    background-image: none;
    background-color: #ff5d38;
    border-color: #ff5d38;
    color: white;
  }

  .am-btn-default:hover, .am-btn-default:focus {
    background-color: #ff5d38;
    border-color: #ff5d38;
    color: white;
  }

  .ticketType {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .ticketType:last-child {
    margin-right: 0px;
  }

  .am-btn-default:hover, .am-btn-default:focus, .am-btn-default:active, .am-btn-default.am-active, .am-dropdown.am-active .am-btn-default.am-dropdown-toggle {
    background-color: #ff5d38;
    border-color: #ff5d38;
    color: white;
  }

  .num-btn {
    background-color: #ff5d38;
    border-color: #ff5d38;
    height: 30px;
    width: 45px;
    line-height: 12px;
  }

  .am-modal-hd {
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 16px;
    color: #323232;
  }

  .num-input {
    display: inline-block;
    width: 100px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    color: #ff5d38;

  }

  .footer {
    position: fixed;
    bottom: 0px;
    height: 60px;
    background-color: #323232;
    color: white;
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
