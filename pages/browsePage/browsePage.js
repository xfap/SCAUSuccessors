//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    keyword:"",
    sItemBox:[
      {
        "owner":"LiangDaJian",
        "uploadTime":"2018/7/6/16:51",
        "objectName":"Book",
        "pirURL":"./img/index.jpg",
        "briefInfo":"这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！"
      },
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！"
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡好看的！"
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡好看的！"
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  app.getAvailableTime();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onItemClick:function(e){

  },
  onSearchClick:function(e){
    var key = this.data.keyword;
    console.log("keyword is :"+key);
    // wx.request({
    //   url: getApp().globalData.serverhome,
    //   data: {
    //     stype: 'search',
    //     key: key,
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (res) {
    //     console.log(res)
    //     // fail
    //   }
    // })
  },
  onKeyWordChanged:function(e){
    console.log(e.detail.value);
    var value = e.detail.value;
    this.setData({
      keyword:value,
    })
  }
})
