<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12">
      <div class="am-slider am-slider-default" data-am-flexslider="{controlNav:false,directionNav:false}" id="slider"
           style="margin-bottom: 0px">
        <ul class="am-slides" id="slides">

          <li v-for="(img,index) in imgList"><span>{{index+1}}/{{imgList.length}}</span><img :src="img.src" height="256"/></li>
        </ul>
      </div>
      <div style="width: 100%;height: 60px; background-color: rgba(0,0,0,0.5);position: absolute;bottom: 0px;"
           class="titleDiv">
        <div style="float: left;text-overflow:ellipsis;width: 100%;color: white;    padding-top: 5px;
    padding-left: 20px;" class="title">
          <span v-text="title" style="color: white"></span>
        </div>
        <div style="float: left;text-overflow: ellipsis;width: 100%;height: 20px;line-height: 20px;padding-left: 20px;"
             class="titleInfo">
          <span v-text="titleInfo"></span>
          <span style="float: right;padding-right: 20px" v-text="days+'天后结束'"></span>
        </div>
      </div>
    </div>
    <div class="am-u-sm-12"
         style="height: 40px;background-color: #ececec;line-height: 40px;text-align: center;font-size: 14px;color: #555555;">
      展览详情
      <span class="triangle-down"
            style="position: absolute;bottom: -8px; left: calc(50% - 8px);right: calc(50% - 8px);"></span>
    </div>
    <div class="am-u-sm-12" style="padding: 20px;font-size: 14px" v-html="contentHtml">

    </div>
    <div class="am-u-sm-12"
         style="height: 40px;background-color: #ececec;line-height: 40px;text-align: center;font-size: 14px;color: #555555;">
      票种详情
      <span class="triangle-down"
            style="position: absolute;bottom: -8px; left: calc(50% - 8px);right: calc(50% - 8px);"></span>
    </div>

    <div class="am-u-sm-12" id="ticketDiv">
      <div class="ticketInfo" v-for="item in ticket" style="width: 100%;float: left">
        <div style="padding-bottom: 10px;float: left;width: 100%">
          <span class="ticketTitle" style="float: left" v-text="item.name"></span> <span class="ticketPrice"
                                                                                          style="float: right"
                                                                                          v-text="'¥'+item.price"></span>
        </div>
        <div style="padding-bottom: 10px;border-bottom: 1px solid rgba(115,115,115,0.5);float: left;width: 100%">
          <span class="ticketContent" style="float: left" v-text="item.detailTxt"></span>
        </div>
      </div>

    </div>
    <div class="am-u-sm-12" style="height: 60px"></div>
    <div class="am-u-sm-12 footer" style="z-index: 1300">
      <div class="left" style="width: calc(100% - 112px)">
        <span v-text="'¥'+price+'起'"></span>
      </div>
      <button class="am-btn right" style="width: 112px;z-index: 1400" data-am-modal="{target: '#my-alert'}" v-if="orderSta">
        <span  @click="orderStaChange">提交订单</span>
      </button>
      <button class="am-btn right" style="width: 112px;z-index: 1400" data-am-modal="{target: '#my-alert'}" v-else >
        <span style="vertical-align: middle">立即购买</span>
      </button>


    </div>
    <div class="am-modal-actions" tabindex="-1" id="my-alert" style="bottom: 60px;background-color: white">
      <div class="am-modal-actions-group" style="margin: 0px">
        <div>
          <div class="am-modal-hd" >选择票种</div>
          <div class="am-modal-bd">
            <button type="button" class="am-btn am-btn-default am-radius ticketType" v-bind:class="{'select-btn' : item.select}" v-for="(item,index) in ticket" v-text="item.name" @click="selectType(index,item.ticketID)"></button>
          </div>
        </div>
        <div>
          <div class="am-modal-hd" >选择数量</div>
          <div class="am-modal-bd" style="padding-bottom: 40px;">
            <button type="button" class="am-btn am-btn-danger num-btn" @click="minus">-</button>
            <input type="text" class="am-form-field am-radius num-input" :value="num"/>
            <button type="button" class="am-btn am-btn-danger num-btn" @click="plus">+</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import $ from 'jquery'
  import { apis } from '../assets/js/app'
  console.log(apis)

  export default {
    data () {
      return {
        msg: 'Hello World!',
        imgList: [],
        title: '',
        titleInfo: '',
        days: '',
        ticket: [],
        price: '',
        orderSta: false,
        num: 1,
        picked:"",
        type:-1,
        active:-1,
        contentHtml:'',
        pay:{}
      }
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error
        }
      }
    },
    created: function () {

    },
    methods: {
      orderStaChange: function () {
        console.log('xxx')
        $('#my-alert').modal('close');
        var self = this ;
        setTimeout(function(){
          console.log(self.pay)
          self.$router.push({ path: 'orderInfo', query: self.pay})
        },50)
       // this.$router.push('orderInfo')

      },
      minus: function () {
        if(this.num > 0)
        this.num = this.num - 1;
      },
      plus: function () {
        this.num = this.num + 1;
      },
      selectType:function(index,type){
        for(var i of this.ticket){
          i.select= false
        }
        this.ticket[index].select = true;
        this.pay.name=this.ticket[index].name;
        this.pay.detailTxt=this.ticket[index].detailTxt;
        this.pay.price=this.ticket[index].price;
        this.pay.ticketID=this.ticket[index].ticketID;
        this.pay.totalNum=this.ticket[index].totalNum;
        this.pay.num=this.num;
        console.log(this.pay)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$http.post(apis+'api_user.aspx', {'type': 1001,'ExhibitionID':28}).then(
          (successData)=>
        {
          console.log(successData)
          var res = JSON.parse(successData.bodyText)
          console.log(res)
          this.imgList = res.data[0].ImgList;
          this.title = res.data[0].Name;
          this.titleInfo = res.data[0].Address;
          this.price = res.data[0].ticket[0].Price;
          var date1 = new Date(res.data[0].BeginTime)
          var date2 = new Date(res.data[0].EndTime)
          var date3 = date2 -date1;
          this.days = Math.floor(date3/(24*3600*1000));
          this.contentHtml = res.data[0].DetailTxt
          console.log(this);
          for(var i =0;i<res.data[0].ticket.length;i++){
            var obj=res.data[0].ticket;
            var select=false;
            if(i==0){
              select=true;
            }
            this.ticket.push({name:obj[i].Name,price:obj[i].Price,ticketID:obj[i].TicketID,detailTxt:obj[i].DetailTxt,select:select,totalNum:obj[i].TotalNum})
          }
          this.pay.name=this.ticket[0].name;
          this.pay.detailTxt=this.ticket[0].detailTxt;
          this.pay.price=this.ticket[0].price;
          this.pay.ticketID=this.ticket[0].ticketID;
          this.pay.totalNum=this.ticket[0].totalNum;
          this.pay.num=this.num;
        }
        ,
        (fileData)=>
        {
          console.log(fileData);
        }
        )
        ;

      })
      let self = this;
      $('#my-alert').on('open.modal.amui', function () {
        self.orderSta = true;
      });
      $('#my-alert').on('close.modal.amui', function () {
        self.orderSta = false;
      });
    },
    updated: function () {
      $('#slider').flexslider({controlNav: false, directionNav: false});
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
  .select-btn{
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
.ticketType{
  margin-right: 10px;
  margin-bottom: 10px;
}
.ticketType:last-child{
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
  .am-modal-hd{
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

  .footer .right {
    float: left;
    height: 100%;
    line-height: 42px;
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
