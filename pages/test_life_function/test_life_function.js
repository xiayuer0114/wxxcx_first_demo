//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello WX',
    color:"purple"
  },
  //事件处理函数123
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
  //onReady
  onReady:function(){
    console.log("页面已经做好准备");
  },
  onShow: function () {
    console.log("页面onShow");
  },
  onHide: function () {
    console.log("页面onHide");
  },
  clickeme: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 

})


/*
  页面跳转
    最好用wx.redirectTo，navigateTo会将之前的页面隐藏
    使用页面跳转，需要将app,json中配置的tarBar去掉，否则不会跳转
 */