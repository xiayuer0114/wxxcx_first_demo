//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello WX',
    color:"purple"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面的初始化
  onLoad: function () {
    var app=getApp();
    console.log(app.courseName);
    //设置数据，是冒号不是等于号
    this.setData({
      motto: app.courseName
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
