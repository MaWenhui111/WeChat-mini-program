// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstcolor:"#9A9A9A",
    secondcolor:"black",
    list:[
      {
        timestamp: "2022-11-19 21:27:41",
        content: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 4,
      },
      {
        timestamp: "2022-10-01 15:56:23",
        content: "You are the only one who wins my heart, and you are the only one who doesn't appreciate it.",
        total_likes: 12,
      },
    ]
  },

  first_select: function () {
    wx.redirectTo({
      url: '../square/square'
    })
  },

  second_select: function () {
    wx.navigateTo({
      url: '../commit/commit'
    })
  },

  third_select: function () {
    // wx.redirectTo({
    //   url: '/pages/mine/mine'
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})