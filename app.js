//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function(res) {
        var code = res.code
        console.log('code:' + code)
        var appID = 'wx6da19c06cdf13a16'                //自己的appID
        var secret = 'dbfd6e796201bdf000e68a56a1224fbe' //在开发平台获取的secret
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appID + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          success: function(res) {
            var openid = res.data.openid
            console.log('openid:' + openid)
            getApp().globalData.user_id = openid
            console.log('!!openid:' + getApp().globalData.user_id)
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    serverhome: 'http://192.168.253.1:8089/successor/Listener',
    serverhome_successor: 'http://192.168.253.1:8089/successor',
    area_name: '',
    dorm_name: '',
    user_id: ''
  },
  getAvailableTime: function() {
    // var time = new Date().get;
    var temp = new Date();
    var date = temp.toJSON().substring(0, 10);
    var hour = temp.getHours();
    var minute = temp.getMinutes();
    var second = temp.getSeconds();
    var cha = '-';
    date += cha;
    date += hour;
    date += cha;
    date += minute;
    date += cha;
    date += second;
    var realDate = date.replace(/-/g, '_');
    console.log("the return time is :" + realDate);
    return realDate;
  }
})