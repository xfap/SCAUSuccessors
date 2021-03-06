const app = getApp() //微信头像
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    productInfo: {},
    image: '',
    img_class: 'sender-photo',
    suc_title: '',
    suc_intro: '',
    url: getApp().globalData.serverhome
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) { //微信头像
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
    var that = this;
    wx.getStorage({
      key: 'modify2',
      success: function (res) {
        console.log(res.data)
        console.log(res.data.pirUrl)
        console.log(res.data.objectName)
        console.log(res.data.briefInfo)
        // objectName
        // owner
        that.setData({ 
          image:res.data.pirUrl,
          suc_title: res.data.objectName,
          suc_intro: res.data.briefInfo
          })

        // uploadTime
      }
    })
  },
  getUserInfo: function (e) { //微信头像
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

  biaotiinput: function (e) {
    this.data.suc_title = e.detail.value
    console.log(this.data.suc_title)
  },
  miaoshuinput: function (e) {
    this.data.suc_intro = e.detail.value
    console.log(this.data.suc_intro)
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
  bindChooiceProduct: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths[0],
          img_class: 'has-photo'
        })
        console.log(res)
      }
    })
  },

  publish: function (e) {
    if (this.data.suc_title == '') {
      wx.showModal({
        title: '提示',
        content: '标题不能为空！'
      })
      return
    }
    if (this.data.image == 'shch.png') {
      wx.showModal({
        title: '提示',
        content: '图片不能为空！'
      })
      return
    }

    var nowtime = app.getAvailableTime(); //未测试的时间传送代码
    wx.request({
      url: this.data.url,
      data: {
        stype: 'upload',
        suc_title: this.data.suc_title,
        suc_intro: this.data.suc_intro,
        publish_time: nowtime //未测试的时间传送代码
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })

    wx.uploadFile({
      url: this.data.url,
      filePath: this.data.image,
      //图片检验是否为空功能：
      //(未实现)
      name: 'img',
      header: {
        "Content-Type": "multipart/form-data",
        'accept': 'application/json',
        // 'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
      },
      formData: {
        //测试key值需不需要加''
        stype: 'upload_pic',
        suc_id: '111',
        user_id: getApp().getUserID(),
      },
      success: function (res) {
        console.log(JSON.parse(res.data));
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000,
          mask: true
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../browsePage/browsePage',
          })
        }, 2000)
      },
      fail: function (res) {
        console.log('fail' + res);
        wx.showModal({
          title: '提示',
          content: '上传图片失败！'
        })
        return
      },
    })
  }
})