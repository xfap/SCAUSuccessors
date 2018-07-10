// pages/uploadPage/uploadPage.js
const app = getApp()  //微信头像
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    productInfo: {},
    image: 'shch.png',
    img_class: 'sender-photo',
    suc_title:'',
    suc_intro:'',
    url: getApp().globalData.serverhome 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {        //微信头像
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
  getUserInfo: function (e) {       //微信头像
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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

  biaotiinput: function (e) {
    this.data.suc_title = e.detail.value
    console.log(this.data.suc_title)
  },
  miaoshuinput: function (e) {
    this.data.suc_intro= e.detail.value
    console.log(this.data.suc_intro)
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

  },
  bindChooiceProduct: function() {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths[0],
          img_class: 'has-photo'
        })
        console.log(res)
        /*wx.uploadFile({
          url: 'https://127.0.0.1.com',      //此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'img',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
            // 'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
          },
          formData: {
            'user': 'test'  //其他额外的formdata，可不写
          },
          success: function (res) {
            var data = res.data;
            console.log('data');
          },
          fail: function (res) {
            console.log('fail');

          },
        })*/
      }
    })
  },

publish:function(e){
   var nowtime = app.getAvailableTime();//未测试的时间传送代码
  wx.request({
    url: this.data.url,
    data: {
      stype: 'upload',
      suc_title: this.data.suc_title,
      suc_intro: this.data.suc_intro,
      publish_time: nowtime  //未测试的时间传送代码
    },
    success: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
      // fail
    }
  })

   wx.uploadFile({
    url: this.data.url,      //此处换上你的接口地址
    filePath: this.data.image,
          name: 'img',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
            // 'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
          },
          formData: {
            stype : 'upload_pic',
            suc_id:'111',
            user_id:'1111'  //其他额外的formdata，可不写
          },
          success: function (res) {
            var data = res.data;
            console.log('data');
          },
          fail: function (res) {
            console.log('fail');

          },
        })
}
  // publish: function(e) {
  //   var suc_title = this.data.suc_title;
  //   console.log(suc_title)
  //   var suc_intro = this.data.suc_intro;
  //   console.log(suc_intro)
  //   wx.showToast({
  //     title: '发布成功',
  //     icon: 'success',
  //     duration: 2000,
  //     mask: true
  //   })
  //   setTimeout(function () {
  //     wx.navigateTo({
  //       url: '../browsePage/browsePage',
  //     })
  //   }, 2000)
  // }
})