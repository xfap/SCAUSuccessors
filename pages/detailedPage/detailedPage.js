// pages/detailedPage/detailedPage.js
const app = getApp() //微信头像昵称获取
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    objects: {
      owner: "null",
      uploadTime: "null",
      objectName: "null",
      pirUrl: "tu5.jpg",
      briefInfo: "null",
      objectId: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.data.objects.owner = options.owner;
    that.data.objects.uploadTime = options.uploadTime;
    that.data.objects.objectName = options.objectName;
    that.data.objects.pirUrl = options.pirUrl;
    that.data.objects.briefInfo = options.briefInfo;
    that.data.objects.objectId = options.objectId;
    console.log('ID：' + that.data.objects.objectId)
    that.setData({
      objects: that.data.objects
    })
    //头像昵称获取
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

  wanted: function() {
    var that = this
    wx.request({
      url: getApp().globalData.serverhome,
      data: {
        stype: 'need',
        need_time: app.getAvailableTime(),
        user_id: getApp().getUserID(),
        suc_id: that.data.objects.objectId
      },
      success: function(res) {
        wx.showToast({
          title: '发送成功',
          icon: 'success'
        })
      }

    })
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})