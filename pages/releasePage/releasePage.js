// pages/releasePage/releasePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAlready:true,
    releasedContent:"hide",
    unreleasedContent:"hide",
    backgroundContent:"show",
    getTime:"未设定",
    dateTimeArray:null,
    // nowDate:null,
    startDate:"未设定",
    endDate: "未设定",
    sItemBox: [
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      },
      {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      },
    ],
    uItemBox: [
      {
        "id":1,
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒难看！"
      },
      {
        "id": 2,
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒难看的！"
      }, {
        "id": 3,
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡难看的！"
      }, {
        "id": 4,
        "owner": "LiangDaJian",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡难看的！"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  onReleasedClick:function () {
    this.setData({
      releasedContent: "show",
      unreleasedContent: "hide",
      backgroundContent:"hide",
    })
  },

  onUneleasedClieck:function () {
    this.setData({
      releasedContent: "hide",
      unreleasedContent: "show",
      backgroundContent:"hide"
    })
  },
  changeStartDate:function (e){
    //console.log(e.detail.value),
    this.data.sItemBox[0].startDate=e.detail.value;
    this.data.sItemBox[0].endDate = e.detail.value;
    this.setData({
      //startDate:e.detail.value
      sItemBox:this.data.sItemBox,
    });
    console.log(this.data.sItemBox[0].startDate);

  },
  changeEndDate: function (e) {
    this.data.sItemBox[0].endDate = e.detail.value;
    this.setData({
      sItemBox: this.data.sItemBox,
    })
  },
  onModifyClick:function (e){
    var Iid = e.currentTarget.dataset.id;
    var item = this.data.uItemBox[Iid];
    console.log(item);
    wx.setStorage({
      key: 'modify2',
      data: {
          objectName:item.objectName,
          owner:item.owner,
          pirUrl:item.pirURL,
          uploadTime:item.uploadTime
      },
    });
    wx.navigateTo({
      url: '../modifyPage/modifyPage',
    })
  }
})