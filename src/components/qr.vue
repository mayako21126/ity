<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12"
         style="padding-top: 20px;padding-bottom: 20px;padding-left:20px;padding-right: 20px;margin-top: 80px;text-align: center">
      <div id="qrcode" class="qrcode">

      </div>
    </div>
    <div class="am-u-sm-12">
      <div style="margin-top: 40px">
        <div class="tip" style="float: left;width: 100%;height: 30px;display: flex;
align-items: center;
justify-items: center;"> <span><img src="../assets/i/tip.png" width="16" alt="" style="z-index: 999;background-color: white"><label
          for="">温馨提示</label></span></div>
        <div style="padding-left: calc(60px + 9%);float: left;width: 100%;padding-right: 10%;font-size: 12px;color: #323232;" >
          将二维码出示给现场工作人员，扫码后即可入场；此二维码唯一，请截图保管，或者关注i体验微信公众号查看哦～

        </div>
      </div>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
//  import {qr} from '../assets/js/app'
import qrCode from 'qrcode-npm'


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
        var qr =  window.sessionStorage.qr;
        // var  qr = 'xx?a=11&&b=c8b18c68a148d4a5a34c16eb2e391535&&c=20170224160550&&d=oYCiswOTI6DiRV4mr4ulxPAUVwhM&&e=81'
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qrg = qrCode.qrcode(10, 'M');
        qrg.addData(qr);
        qrg.make();
        var img = qrg.createImgTag(4);
        var flg =" style='border-radius: 20px;border: 1px solid rgba(115,115,115,0.3);' "
        var newstr=img.substring(0,4);
        var endstr=img.substring(5)
        console.log(newstr+flg+endstr)

        document.getElementById("qrcode").innerHTML = newstr+flg+endstr;

        //console.log(window.QRCode)
      })
    }
  }
</script>
<style scoped>
  .img-radius{
    border-radius: 20px;
    border: 1px solid rgba(115,115,115,0.3);
  }
  .qrcode img{
    border-radius: 50px;
    border: 1px solid rgba(115,115,115,0.3);
  }
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
  /*#qrcode {*/
    /*padding-left: calc(50% - 143px );*/
  /*}*/

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
    vertical-align: middle;
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
