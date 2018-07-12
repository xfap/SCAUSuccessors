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
    tempItem:null,
    t1:null,
    t2:null,
    // nowDate:null,
    sItemBox: [
      {
        "objectId":1,
        "owner": "user1",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      },
      {
        "objectId":2,
        "owner": "user2",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index2.jpg",
        "briefInfo": "这本书炒鸡炒鸡炒鸡炒鸡炒鸡鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒鸡炒好看的！",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "objectId": 3,
        "owner": "user3",
        "uploadTime": "2018/7/6/16:51",
        "objectName": "Book",
        "pirURL": "./img/index.jpg",
        "briefInfo": "这本书炒鸡好看的！啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        "startDate": "未设定",
        "endDate": "未设定",
      }, {
        "objectId": 4,
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
    var that = this;
    wx.request({
      url: getApp().globalData.serverhome,
      data:{
        stype:"ask_appoint",
        user_id:"test_usrid_2",
      },
      success:function(res){
        console.log("getData onLoad:" + res.data.content);
        that.setData({
          tempItem:res.data.content,
        });
        that.adapt();
      }
    })
  },
  adapt:function(e){
    var that = this;
    var s = that.data.sItemBox;
    var t = that.data.tempItem;
    var r = [];
    for (let i = 0; i < that.data.tempItem.length; i++) {
      var t2 = new Object();
      t2.objectId = t[i].SUC_ID;
      t2.owner = t[i].USER_ID;
      t2.uploadTime = t[i].SUC_PUBLISH_TIME;
      t2.objectName = t[i].SUC_TITLE;
      t2.startDate = "未设定";
      t2.endDate = "未设定";
      t2.pirURL = getApp().globalData.serverhome_successor + t[i].SUC_PIC_URL.substring(1);
      if (t[i].SUC_INTRO == null) t2.briefInfo = "这个人很懒，什么也没有写..............";
      else t2.briefInfo = t[i].SUC_INTRO;
      if (t2.briefInfo.length < 14) t2.briefInfo += ".....................................";
      r.push(t2);
    }
    that.setData({
      sItemBox: r,
    })
    // that.onShow();
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
      if (this.data.sItemBox[i].objectId==Iid){
        console.log("changeStartDate:Iid是"+Iid);
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
      if (this.data.sItemBox[i].objectId == Iid) {
        console.log("changeEndDate:Iid是" + Iid);
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
      if (Iid == that.data.sItemBox[i].objectId){
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
    console.log(e.currentTarget.dataset);
    console.log("onEnterClick Iid :"+Iid);
    // console.log(this.data.sItemBox[0]);
    var startTime;
    var endTime;
    var itemId;
    var owner;
    for(var i=0;i<this.data.sItemBox.length;i++){
      if (this.data.sItemBox[i].objectId==Iid) {
        console.log(this.data.sItemBox[i]);
        startTime = this.data.sItemBox[i].startDate;
        endTime = this.data.sItemBox[i].endDate;
        itemId = this.data.sItemBox[i].objectId;
        owner = this.data.sItemBox[i].owner;
      }
    }
    wx.showModal({
      title: '提示',
      content: '确认要提交吗',
      success: function(e2) {
        if(e2.confirm){
          console.log("Send start time:"+startTime);
          console.log("Send end time:" + endTime);
          startTime+="-00-00";
          endTime+="-23-59";
          startTime = startTime.replace(/-/g,'_');
          endTime = endTime.replace(/-/g,'_');
          console.log("startTime:"+startTime);
          console.log("endTime:"+endTime);
          wx.request({
            url: getApp().globalData.serverhome,
            data:{
              stype:'confirmNeed',
              user_id:owner,
              SUC_ID:itemId,//不确定要不要转成字符串
              OWNER_SPARE_TIME_START:startTime,
              OWNER_SPARE_TIME_END:endTime,
            },
            success:function(res){
              console.log(res.data);
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000,
                mask: true
              })
            }
          })
        }
      }
    })
  },
  setFormatTime:function(time1,time2){
    time1+="-00-00";
    time2+="-00-00";
    t1=time1;
    t2=time2;
    console.log("t1:"+t1);
    console.log("t2:"+t2);
  }
})