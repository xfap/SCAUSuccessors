// pages/uploadPage/uploadPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo: {},
    image: 'shch.png',
    img_class: 'sender-photo',
    object: {
      objectName:"",
      owner: "",
      uploadTime: "",
      objectName: "",
      pirUrl: "",
      briefInfo: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options);
    wx.getStorage({
      key: 'modify',
      success: function (res) {
        // console.log("res:"+res.owner);
        console.log(res.data);
        that.data.object.owner = res.data.owner;
        that.data.object.uploadTime = res.data.uploadTime;
        that.data.object.objectName = res.data.objectName;
        that.data.object.pirUrl = res.data.pirUrl;
        that.data.object.briefInfo = res.data.briefInfo;
        that.data.image = res.data.pirUrl;
        that.setData({
          object: that.data.object,
          image:that.data.image
        })
      }
    })
    // console.log(object);
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

  publish: function () {
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000,
      mask: true
    })
    setTimeout(function () {
      wx.navigateTo({
        url: '../reservedPage/reservedPage',
      })
    }, 2000)
  }

})