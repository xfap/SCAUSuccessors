//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    keyword: "",
    modeId: 0,
    tempItem: null,
    objectClass: "",
    selected1: "selected",
    selected2: "btClass",
    selected3: "btClass",
    selected4: "btClass",
    selected5: "btClass",
    sItemBox: [{
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！"
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
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    var that = this;
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: "browse",
      },
      success: function(res) {
        console.log("onLoad res:" + res);
        that.setData({
          tempItem: res.data.content,
        })
        console.log(that.data.tempItem);
        that.adapt();
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onItemClick: function(e) {

  },
  onSearchClick: function(e) {
    var that = this;
    var key = this.data.keyword;
    console.log("keyword is :" + key);
    console.log("getApp().globalData.serverhome:" + getApp().globalData.serverhome);
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: 'search',
        key: key,
      },
      success: function(res) {
        console.log("res:" + res);
        console.log("resdatacontent:" + res.data.content);;
        that.setData({
          tempItem: res.data.content,
        })
        that.adapt();
      },
      fail: function(res) {
        console.log("asdfasdfasdf" + res)
        // fail
      }
    })
  },
  onKeyWordChanged: function(e) {
    console.log(e.detail.value);
    var value = e.detail.value;
    this.setData({
      keyword: value,
    })
    this.onRefreshItem()
  },
  onShow: function() {
    console.log("onShow!");
    if (this.data.modeId == 1) {
      console.log(this.data.tempItem.length);

    }
  },
  onRefreshItem: function() {
    console.log("refresh");
    console.log(this.data.tempItem)
    // this.onLoad();
  },
  adapt: function() {
    var that = this;
    var s = that.data.sItemBox;
    var t = that.data.tempItem;
    var r = [];
    for (let i = 0; i < that.data.tempItem.length; i++) {
      var t2 = new Object();
      t2.objectId = t[i].SUC_ID;
      t2.owner = t[i].USER_ID;
      t2.uploadTime = t[i].SUC_PUBLISH_TIME;
      t2.objectName = t[i].SUC_TITLE;
      t2.pirURL = getApp().globalData.serverhome_successor + t[i].SUC_PIC_URL.substring(1);
      if (t[i].SUC_INTRO == null) t2.briefInfo = "这个人很懒，什么也没有写..............";
      else t2.briefInfo = t[i].SUC_INTRO;
      if (t2.briefInfo.length < 14) t2.briefInfo += ".....................................";
      r.push(t2);
    }
    that.setData({
      sItemBox: r,
    })
    that.onShow();
  },
  changeClass: function(e) {
    // objectClass = "all";
    var that = this;
    console.log("objectClass = " + e.currentTarget.dataset.classs);
    that.setData({
      objectClass: e.currentTarget.dataset.classs
    });
    this.changeSelectedTag();
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: "browse_class",
        suc_class: that.data.objectClass,
      },
      success: function(res) {
        console.log("onBrowse_class:" + res);
        that.setData({
          tempItem: res.data.content,
        })
        console.log(that.data.tempItem);
        that.adapt();
      }
    })
  },
  changeSelectedTag: function(e) {
    if (this.data.objectClass == "") {
      this.setData({
        selected1: "selected",
        selected2: "btClass",
        selected3: "btClass",
        selected4: "btClass",
        selected5: "btClass",
      })
    } else if (this.data.objectClass == "数码") {
      this.setData({
        selected1: "btClass",
        selected2: "selected",
        selected3: "btClass",
        selected4: "btClass",
        selected5: "btClass",
      })
    } else if (this.data.objectClass == "书籍") {
      this.setData({
        selected1: "btClass",
        selected2: "btClass",
        selected3: "selected",
        selected4: "btClass",
        selected5: "btClass",
      })
    } else if (this.data.objectClass == "文具") {
      this.setData({
        selected1: "btClass",
        selected2: "btClass",
        selected3: "btClass",
        selected4: "selected",
        selected5: "btClass",
      })
    } else if (this.data.objectClass == "生活用品") {
      this.setData({
        selected1: "btClass",
        selected2: "btClass",
        selected3: "btClass",
        selected4: "btClass",
        selected5: "selected",
      })
    }
  },

  onPullDownRefresh: function() {
    var that = this
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.showNavigationBarLoading();
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: 'browse'
      },
      success: function(res) {
        that.setData({
          tempItem: res.data.content,
        })
        console.log('下拉刷新：' + that.data.tempItem);
        that.adapt();
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  },
})