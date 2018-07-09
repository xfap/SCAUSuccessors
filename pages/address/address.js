// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    room: '',
    input_address: '',
    input_room: '',
    url: getApp().globalData.serverhome
  },

  modify: function() {
    if (this.data.input_address == '') {
      wx.showModal({
        title: '提示',
        content: '宿舍区不能为空！'
      })
      return
    }
    if (this.data.input_room == '') {
      wx.showModal({
        title: '提示',
        content: '房号不能为空！'
      })
      return
    }
    this.setData({
      address: this.data.input_address,
      room: this.data.input_room
    })
    //console.log('address:' + this.data.address)
    //console.log('room:' + this.data.room)
    //console.log(getApp().globalData.serverhome)
    wx.request({
      url: this.data.url,
      data: {
        stype: 'address',
        user_id: '10001',
        area_name: this.data.address,
        dorm_name: this.data.room
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
        // fail
      }
    })
    console.log('testing')
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      mask: true
    })
    setTimeout(function() {
      wx.navigateBack({
        changed: true
      })
    }, 2000)

  },

  inAddress: function(e) {
    this.data.input_address = e.detail.value
    console.log(this.data.input_address)
  },

  inRoom: function(e) {
    this.data.input_room = e.detail.value
    console.log(this.data.input_room)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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