// pages/detailedPage/detailedPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objects:{
      owner: "null",
      uploadTime: "null",
      objectName: "null",
      pirUrl: "null",
      briefInfo: "null"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    that.data.objects.owner = options.owner;
    that.data.objects.uploadTime = options.uploadTime;
    that.data.objects.objectName = options.objectName;
    that.data.objects.pirUrl = options.pirUrl;
    that.data.objects.briefInfo = options.briefInfo;
    that.setData({
      objects: that.data.objects
    })
    // console.log(object)
    //console.log(options.pirUrl);

    // wx.getStorage({
    //   key: 'keyaaa',
    //   success: function (res) {
    //     console.log('ddddddddddddddddddddddddd');
    //     console.log("owner:"+options.owner);
    //     that.data.object.owner=options.owner;
    //     that.data.object.uploadTime=options.uploadTime;
    //     that.data.object.objectName=options.objectName;
    //     that.data.object.pirUrl=options.pirUrl;
    //     that.data.object.briefInfo=options.briefInfo;
    //     that.setData({
    //       object:that.data.object
    //     })
    //     // console.log(object)
    //     console.log(options.pirUrl)
    //   },
    // })
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
  
  }
})