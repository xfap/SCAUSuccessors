// pages/detailedPage/detailedPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    owner: "null",
    uploadTime: "null",
    objectName: "null",
    pirUrl: "null",
    briefInfo: "null"
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

  },
   
  //   var that = this;
  //   console.log(options);
    
  //   wx.getStorage({
  //     key: 'keyaaa',
  //     success: function (res) {
  //       that.data.object.owner=options.owner;
  //       that.data.object.uploadTime=options.uploadTime;
  //       that.data.object.objectName=options.objectName;
  //       that.data.object.pirUrl=options.pirUrl;
  //       that.data.object.briefInfo=options.briefInfo;
  //       that.setData({
  //         object:that.data.object
  //       })
  //       // console.log(object)
  //       console.log(options.pirUrl)
  //     },
  //   })
  // },

  onShareAppMessage: function () {

  },
  bindChooiceProduct: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://127.0.0.1.com',      //此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'img',
          ok:'tesst',
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
        })
      }
    })

  }
})