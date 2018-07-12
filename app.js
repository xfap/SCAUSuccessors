//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    var that = this
    wx.login({
      success: function(res) {
        //console.log(that.getUserID())
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
              this.setUserID(res.userInfo.nickName)
              console.log(this.getUserID())
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
    console.log(this.globalData.userInfo)
    setInterval(function() {
      wx.request({
        url: getApp().globalData.serverhome,
        stype: 'login',
        user_id: getApp().getUserID()
      })
    }, 2000)
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
  },

  getUserID: function() {
    return this.globalData.user_id
  },

  setUserID: function(name) {
    this.globalData.user_id = name
  }
})