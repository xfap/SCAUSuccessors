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
    modeId:0,
    tempItem:null,
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
  if(this.data.modeId==1){
    console.log("modeID=1");
  }
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
    var that = this;
    var key = this.data.keyword;
    console.log("keyword is :"+key);
    console.log("getApp().globalData.serverhome:" + getApp().globalData.serverhome);
    wx.request({
      url: getApp().globalData.serverhome,

      data: {
        stype: 'search',
        key: key,
      },
      success: function (res) {
        console.log(res.data.content);
        that.setData({
          modeId:1,
          tempItem:res.data.content
        })
        that.onShow();
        // this.setData({
        //   modeId:1,
        // })
        // this.onLoad();
      },
      fail: function (res) {
        console.log(res)
        // fail
      }
    })
  },
  onKeyWordChanged:function(e){
    console.log(e.detail.value);
    var value = e.detail.value;
    this.setData({
      keyword:value,
    })
    this.onRefreshItem()
  },
  onShow:function(){
    console.log("onShow!");
    if(this.data.modeId==1) {
      console.log(this.data.tempItem.length)
    }
  },
  onRefreshItem:function(){
    console.log("refresh");
    console.log(this.data.tempItem)
    // this.onLoad();
  },
  adapt:function(){
    var that = this;
    var s = that.data.sItemBox;
    var t = that.data.tempItem;
    for(var i=0;i<that.data.tempItem.length;i++){
      s[i].owner=t[i].USER_ID;
      s[i].uploadTime = t[i].SUC_PUBLISH_TIME;
      s[i].objectName = t[i].SUC_PIC_URL;
      s[i].pirURL = getApp().globalData.serverhome_successor + t[i].SUC_PIC_URL.sub;

      // this.setData({
      //   s[1].owner: "LiangDaJian",
      //   "uploadTime": "2018/7/6/16:51",
      //   "objectName": "Book",
      //   "pirURL": "./img/index.jpg",
      //   "briefInfo":
      // })
    }
  }
})
