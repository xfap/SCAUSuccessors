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
    sItemBox: [
      {
        "id":1,
        "owner": "user1",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      },
      {
        "id":2,
        "owner": "user2",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "id": 3,
        "owner": "user3",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "id": 4,
        "owner": "user4",
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
    var Iid = e.currentTarget.dataset.id;
    for(var i = 0;i < this.data.sItemBox.length;i++){
      if(this.data.sItemBox[i].id=Iid){
        console.log("Iid是"+Iid);
        console.log("this.data.sItemBox[i]="+this.data.sItemBox[i]);
        this.data.sItemBox[i].startDate=e.detail.value;
        this.data.sItemBox[i].endDate=e.detail.value;
        this.setData({
          sItemBox:this.data.sItemBox,
        })
        console.log(this.data.sItemBox[i].startDate);
        break;
      }
    }

  },
  changeEndDate: function (e) {
    var Iid = e.currentTarget.dataset.id;
    for (var i = 0; i < this.data.sItemBox.length; i++) {
      if (this.data.sItemBox[i].id = Iid) {
        this.data.sItemBox[i].endDate = e.detail.value;
        this.setData({
          sItemBox: this.data.sItemBox,
        })
        console.log(this.data.sItemBox[i].endDate);
        break;
      }
    }
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
  },
  onResetClick:function(e){
    var Iid = e.currentTarget.dataset.id;
    console.log("Iid="+Iid);
    var that = this;
    for(var i=0;i<that.data.sItemBox.length;i++){
      if(Iid==that.data.sItemBox[i].id){
        that.data.sItemBox[i].startDate = "未设定";
        that.data.sItemBox[i].endDate = "未设定";
        that.setData({
          sItemBox: that.data.sItemBox,
        })
      }
    }
    // console.log(item);
  },
  onEnterClick:function(e) {
    var Iid = e.currentTarget.dataset.id;
    console.log("Iid :"+Iid);
    // console.log(this.data.sItemBox[0]);
    var startTime = null;
    var endTime =null;
    for(var i=0;i<this.data.sItemBox.length;i++){
      if(this.data.sItemBox[i].id==Iid) {
        console.log(this.data.sItemBox[i]);
        startTime = this.data.sIemBox[i].startDate;
        endTime = this.data.sItemBox[i].endDate;
      }
    }
    wx.showModal({
      title: '提示',
      content: '确认要提交吗，提交之后将不可修改',
      success: function(e2) {
        if(e2.confirm){
          console.log("Send start time:"+startTime);
          console.log("Send end time:" + endTime);
        }
      }
    })
  }
})