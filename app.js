//app.js
App({
  onLaunch: function (options) {
    // Do something initial when launch.
    console.log("触发onlaunch");

  },
  onShow: function (options) {
    // Do something when show.
    console.log("触发onShow");

  },
  onHide: function () {
    // Do something when hide.
    console.log("触发onHide");
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  courseName:"防抖音实战",
})