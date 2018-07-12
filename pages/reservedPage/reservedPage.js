// pages/releasePage/releasePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAlready: true,
    releasedContent: "hide",
    unreleasedContent: "hide",
    backgroundContent: "show",
    sItemBox: [
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": null,
        "endDate": null,
      },
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": null,
        "endDate": null,
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡好看的！",
        "startDate": null,
        "endDate": null,
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡好看的！",
        "startDate": null,
        "endDate": null,
      },
    ],
    uItemBox: [
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒难看！"
      },
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒难看的！"
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡难看的！"
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡难看的！"
      },
    ]
  },

  requestItem: function (e) {
    var that = this;
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: "my_request_confirmed",
        user_id: getApp().getUserID(),
      },
      success: function (res) {
        console.log("getData onLoad:" + res.data.content);
        console.log("getFlag:" + res.data.content[0].CONFIRM_GIVE_FLAG);
        that.setData({
          tempItem: res.data.content,
        });
        that.adapt();
      }
    });
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: "my_request_not_confirmed",
        user_id: getApp().getUserID(),
      },
      success: function (res) {
        console.log("getDtat my_request_not_confirmed:" + res.data.content);
        that.setData({
          tempItem2: res.data.content,
        }),
          that.adapt2();
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.requestItem();

  },

  adapt: function (e) {
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
      t2.flag = t[i].CONFIRM_GIVE_FLAG;
      console.log("t2.flag" + t2.flag);
      t2.startDate = t[i].OWNER_SPARE_TIME_START;
      t2.endDate = t[i].OWNER_SPARE_TIME_END;
      if (t[i].SUC_INTRO == null) t2.briefInfo = "这个人很懒，什么也没有写..............";
      else t2.briefInfo = t[i].SUC_INTRO;
      if (t2.briefInfo.length < 14) t2.briefInfo += ".....................................";
      r.push(t2);
    }
    that.setData({
      sItemBox: r,
    })
  },

  adapt2: function (e) {
    var that = this;
    var s = that.data.uItemBox;
    var t = that.data.tempItem2;
    var r = [];
    for (let i = 0; i < that.data.tempItem2.length; i++) {
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
      uItemBox: r,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onReleasedClick: function () {
    this.setData({
      releasedContent: "show",
      unreleasedContent: "hide",
      backgroundContent: "hide",
    })
  },

  onUneleasedClieck: function () {
    this.setData({
      releasedContent: "hide",
      unreleasedContent: "show",
      backgroundContent: "hide",
    })
  }
})