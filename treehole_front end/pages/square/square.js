// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstcolor:"black",
    secondcolor:"#9A9A9A",
    list:[
      {
        face_url:"/images/23.jpeg",
        username:"货拉拉",
        send_timestamp:"2022-12-22 13:21",
        content:"硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。逝将去女，适彼乐土。乐土乐土，爰得我所。硕鼠硕鼠，无食我麦！三岁贯女，莫我肯德。逝将去女，适彼乐国。乐国乐国，爰得我直。",
        total_likes:23,
      },
      {
        face_url:"/images/315.jpeg",
        username:"东北铁牛",
        send_timestamp:"2022-12-22 12:15",
        content:"纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。柔情似水，佳期如梦，忍顾鹊桥归路！两情若是久长时，又岂在朝朝暮暮。",
        total_likes:11,
      },
      {
        face_url:"/images/333.jpeg",
        username:"哆啦B梦",
        send_timestamp:"2022-12-22 10:33",
        content:"总有这些美妙的声音，像一根根弹奏的琴弦，在我的生命中演绎不止。它们犹如古怪的小精灵，在我的世界中盘旋，盘旋成一缕阳光，一抹紫烟，一枝新绿，一弯新月。",
        total_likes:34,
      },
      {
        face_url:"/images/376.jpeg",
        username:"小兔子乖乖",
        send_timestamp:"2022-12-22 09:56",
        content:"远远的观望，静静的守候，也是一种美丽。深深的牵挂，默默的祝福，也是一种美好的心境。",
        total_likes:10,
      },
      {
        face_url:"/images/397.jpeg",
        username:"Cheers",
        send_timestamp:"2022-12-22 08:34",
        content:"May you not be silent in the deep lane, and a dream is not far away.愿你不被沉寂在深巷,有梦就在不远方。",
        total_likes:41,
      },
    ]

  },

  first_select: function(){

  },

  second_select: function(){
    wx.navigateTo({
      url: '/pages/commit/commit',
    })
  },

  third_select: function(){
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
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