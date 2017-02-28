<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12"
         style="text-align: center;height: 53px;line-height: 53px">

      <div>
我的票务
      </div>
    </div>
    <div class="am-u-sm-12" style="padding: 20px;background-color: #ebebf0" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="(item,index) in ticketList" :class="{gray:item.invalid}" style="margin-bottom: 20px" >
        <img src="../assets/i/IMG_2748.png" alt="" width="100%" >
        <div style="width: 100%;height: 60px; background-color: rgba(0,0,0,0.5);bottom: 0px; position: relative;margin-top: -60px"
             class="titleDiv">
          <div style="float: left;text-overflow:ellipsis;width: 100%;color: white;    padding-top: 5px;
    padding-left: 20px;" class="title">
            <span v-text="item.Name" style="color: white"></span>
          </div>
          <div style="float: left;text-overflow: ellipsis;width: 100%;height: 20px;line-height: 20px;padding-left: 20px;"
               class="titleInfo">
            <span v-text="item.Address"></span>
            <span style="float: right;padding-right: 20px" v-text="item.days"></span>
          </div>
        </div>
        <div style="color: #32a1ff;font-size: 14px;text-align: center;height: 33px;background-color: white;line-height: 33px">
          <a v-if="item.invalid" @click="alert(item.CheckTime)">已验证或者展览已过期</a>
          <a @click="qr(item)" class="qra" v-else>点击显示二维码>></a>
        </div>
      </div>
      <div style="width: 100%;text-align: center">
        <span  v-if="noMore"> 无更多数据</span>
        <img src="../assets/i/loading.gif" alt="" v-if="busy" width="25">
      </div>

    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import {apis} from '../assets/js/app'
  export default {
    data () {
      return {
       ticketList:[],
        busy:false,
        draw:1,
        start:0,
        total:0,
        noMore:false
      }
    },
    methods:{
      loadMore:function(){
        this.busy=true
        if(this.noMore == true){
          this.busy=false;
          return false
        }
        this.$http.post(apis+"api_user.aspx", {'type': 1002,start:this.start,length:5,draw:this.draw}).then(
          (successData)=>
        {
          console.log(successData)
          this.busy=false;
          if(successData.body.data.length==0){
            this.noMore=true;
            var self = this;
            window.setTimeout(()=>{this.noMore=false},5000);
            return false
          }else{
            this.noMore=false;
          }
          this.start=this.start+successData.body.data.length;
          var data = successData.body.data;
          this.total = successData.body.recordsTotal;
          for(var i=0;i<data.length;i++){
            data[i].invalid=false;
            if(data[i].used==0){
              data[i].invalid = true;
            }
            var d1 = new Date();
            var d2 = new Date(data[i].DeadLine);
            if(d1>d2){
              data[i].invalid = true;
              data[i].days ='已过期'
            }else{
              var date3 = d2 -d1;
              data[i].days = Math.floor(date3/(24*3600*1000))+'天后结束';
            }
            this.ticketList.push(data[i])
          }


        }
        ,
        (fileData)=>
        {
          console.log(fileData);
        }
        )
        ;
      },
      toInfo:function(id){
        this.$router.push({path:'info',query:{id:id}})
      },
      alert: function(CheckTime){
        alert('票已失效！失效时间为'+CheckTime)
      },
      qr:function(item){
        var query={
          a:item.UserID,
          b:item.NonceStr,
          c:item.time_end,
          d:item.openid,
          e:item.ID
        }
        window.sessionStorage.qr='xx?a='+query.a+'&&b='+query.b+'&&c='+query.c+'&&d='+query.d+'&&e='+query.e
        this.$router.push('qr')
      }
    },
    mounted: function () {
      this.$nextTick(function () {
//        this.$http.post(apis+"api_user.aspx", {'type': 1002,start:this.start,length:5,draw:this.draw}).then(
//          (successData)=>
//        {
//          this.start=this.start+successData.body.data.length;
//          console.log(successData)
//          var data = successData.body.data;
//          this.total = successData.body.recordsTotal;
//          for(var i=0;i<data.length;i++){
//            data[i].invalid=false;
//            if(data[i].used==0){
//              data[i].invalid = true;
//            }
//            var d1 = new Date();
//            var d2 = new Date(data[i].DeadLine);
//            if(d1>d2){
//              data[i].invalid = true;
//              data[i].days ='已过期'
//            }else{
//              var date3 = d2 -d1;
//              data[i].days = Math.floor(date3/(24*3600*1000))+'天后结束';
//            }
//          }
//          this.ticketList=data;
//
//        }
//        ,
//        (fileData)=>
//        {
//          console.log(fileData);
//        }
//        )
//        ;

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
  .qra{
    color: #32a1ff;
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
  .gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
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
