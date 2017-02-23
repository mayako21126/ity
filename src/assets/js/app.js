/**
 * Created by mayako on 2017/2/22.
 */

export const apis = "http://wx.lanhai-tech.com/";
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}
export function directRightUrl () {
  let paths = window.location.href.split('#')
  paths[1] = paths[1] || '/'
  // 老式的#!分隔跳转
  if (paths[0].charAt(paths[0].length - 1) !== '?') {
    paths[0] = `${paths[0]}?`
  }
  if (paths[1].charAt(0) === '!') {
    paths[1] = paths[1].substr(1)
  }
  let url = `${paths[0]}#${paths[1]}`
  if (window.location.href !== url) {
    window.location.href = url
  }
}
export function wxready(self,wx) {
  var url = location.href.split('#')[0];
  self.$http.options.emulateJSON = true
  self.$http.options.emulateHTTP = true;
  console.log(url)
  self.$http.post( apis+"/WeiXin_GetJSSDK.aspx?url="+url, {
    url: url
  }).then(function (res) {
    console.log(res)
    res = res.body
    res = res;
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx6f6347c7f7569287', // 必填，公众号的唯一标识
      timestamp: res.Timestamp, // 必填，生成签名的时间戳
      nonceStr: res.Noncestr, // 必填，生成签名的随机串
      signature: res.Sign,// 必填，签名，见附录1
      jsApiList: [
        'scanQRCode',
        'chooseWXPay',
        'chooseImage',
        'previewImage',
        'uploadImage'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
      self.loading=false;
      // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口

    });
  });
}
