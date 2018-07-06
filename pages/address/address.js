// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    room: '',
    input_address: '',
    input_room: ''
  },

  modify: function() {
    if (this.data.input_address == '' || this.data.input_room == '') {
      wx.showModal({
        title: '提示',
        content: '宿舍区或房号不得为空！'
      })
      return
    }
    this.setData({
      address: this.data.input_address,
      room: this.data.input_room
    })
    console.log('address:' + this.data.address)
    console.log('room:' + this.data.room)
    wx.request({
      url: '',
      area_name: this.data.address,
      dorm_name: this.data.room
    })
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