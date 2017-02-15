<template>
  <div class="am-g-collapse">
    <div class="am-u-sm-12">
      <div class="am-slider am-slider-default" data-am-flexslider="{controlNav:false,directionNav:false}" id="slider"
           style="margin-bottom: 0px">
        <ul class="am-slides" id="slides">

          <li v-for="(img,index) in imgList"><span>{{index+1}}/{{imgList.length}}</span><img :src="img.src"/></li>
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
          <span style="float: right;padding-right: 20px" v-text="days"></span>
        </div>
      </div>
    </div>
    <div class="am-u-sm-12"
         style="height: 40px;background-color: #ececec;line-height: 40px;text-align: center;font-size: 14px;color: #555555;">
      展览详情
      <span class="triangle-down"
            style="position: absolute;bottom: -8px; left: calc(50% - 8px);right: calc(50% - 8px);"></span>
    </div>
    <div class="am-u-sm-12" style="padding: 20px;font-size: 14px">
      <blockquote class="yead_editor yead-selected" data-author="Wxeditor"
                  style="margin: 5px auto; padding-left: 0px; border: 0px; white-space: normal; font-size: 14px;">
        <section style="padding: 10px; line-height: normal; background: rgb(243, 243, 243);">
          <h3 class="yead_bdlc"
              style="margin-right: 12px; padding-left: 10px; font-weight: 700; font-size: 14px; display: inline-block;margin: 0px; border-left-width: 4px; border-left-style: solid; border-left-color: rgb(255, 203, 21); color: rgb(51, 51, 51); line-height: 20px;">
            国家地理时空走廊</h3>
        </section>
      </blockquote>
      <p style="line-height: 25.6px;"><span style="font-size: 12px;">《国家地理》，对于大多数人来说，绝对不只是一本杂志那么简单，它更像一个浓缩的世界，将你触碰不到的领域，一一展现在你的眼前。　</span>
      </p>

      <p style="line-height: 25.6px;"><img style="line-height: 25.6px;" width="100%"
                                           data-src="http://read.html5.qq.com/image?src=forum&amp;q=5&amp;r=0&amp;imgflag=7&amp;imageUrl=http://mmbiz.qpic.cn/mmbiz_png/GKwgbw8MQUgvVsDQD6HfiaZkb8zcib2FAjzNsice0atw4nrdgNp5rzIrtOibjruUegJXfnY0Iww0n5STjx1iccBUEPA/0?wx_fmt=png"
                                           src="http://read.html5.qq.com/image?src=forum&amp;q=5&amp;r=0&amp;imgflag=7&amp;imageUrl=http://mmbiz.qpic.cn/mmbiz_png/GKwgbw8MQUgvVsDQD6HfiaZkb8zcib2FAjzNsice0atw4nrdgNp5rzIrtOibjruUegJXfnY0Iww0n5STjx1iccBUEPA/0?wx_fmt=png"><span
        style="font-size: 12px; line-height: 19.2px;">而这一次的展览，更像是一次故事的诉说，将照片中的每一个故事娓娓道来，而你就会发现，你与世界，只有一副影像的距离。</span>
      </p>
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
          <span class="ticketTitle" style="float: left" v-text="item.title"></span> <span class="ticketPrice"
                                                                                          style="float: right"
                                                                                          v-text="'¥'+item.titlePrice"></span>
        </div>
        <div style="padding-bottom: 10px;border-bottom: 1px solid rgba(115,115,115,0.5);float: left;width: 100%">
          <span class="ticketContent" style="float: left">为了祖国的花朵</span>
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
            <button type="button" class="am-btn am-btn-default am-radius ticketType" v-bind:class="{'select-btn' : item.select}" v-for="(item,index) in ticket" v-text="item.title" @click="selectType(index,item.type)"></button>
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
        active:-1
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
        $('#my-alert').modal('close');
        var self = this ;
        setTimeout(function(){
          self.$router.push('orderInfo')
        },200)
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
        console.log(this.ticket[index])
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$http.get("http://img", {'type': 1}).then(
          (successData)=>
        {
          this.imgList = successData.body.result.imgList;
          this.title = successData.body.result.title;
          this.titleInfo = successData.body.result.titleInfo;
          this.days = successData.body.result.days;
          this.ticket = successData.body.result.ticket;
          this.price = successData.body.result.price
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
