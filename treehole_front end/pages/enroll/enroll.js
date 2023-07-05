// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    phone: "",
    password:"",
    passwordack:""
  },
  
  signin:function(e){
    wx.navigateBack({
      delta: 1
    })
  },

  regist: function(e) {
    var that = this
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.username == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入用户名！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (that.data.phone == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入手机号！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (that.data.phone.length != 11) {
      wx.showModal({
        title: '提示！',
        content: '手机号长度有误，请重新输入！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (!myreg.test(that.data.phone)) {
      wx.showModal({
        title: '提示！',
        content: '请输入正确的手机号码！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (that.data.password == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入密码！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (that.data.passwordack == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入确认密码！',
        showCancel: false,
        success(res) {}
      })
    } 
    else if (that.data.password!=that.data.passwordack ) {
      wx.showModal({
        title: '提示！',
        content: '两次输入密码不一致！',
        showCancel: false,
        success(res) {}
      })
    } 
    else {
      console.log("success")
      wx.reLaunch({
        url: '/pages/square/square'
      })


      // wx.request({
      //   url: 'http://treeholetreehole.saelinzi.com/index.php/Home/User/sign', 
      //   data: {
      //     username: that.data.username,
      //     phone: that.data.phone,
      //     password: that.data.password,
      //     password_again: that.data.passwordack,
      //     face_url: getApp().globalData.userInfo.avatarUrl,
      //   },
      //   method:"POST",
      //   header: {
      //     'content-type': 'x-www-form-urlencoded' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //     if(res.data.error_code == 1){
      //       wx.showModal({
      //         title: '提示！',
      //         content: res.data.msg,
      //         showCancel: false,
      //         success(res) {}
      //       })
      //     }
      //     else if(res.data.error_code == 2){
      //       wx.showModal({
      //         title: '提示！',
      //         content: '两次输入密码不一致！',
      //         showCancel: false,
      //         success(res) {}
      //       })
      //     }
      //     else if(res.data.error_code == 3){
      //       wx.showModal({
      //         title: '提示！',
      //         content: '手机号已被注册！',
      //         showCancel: false,
      //         success(res) {}
      //       })
      //     }
      //     else if(res.data.error_code != 0){
      //       wx.showModal({
      //         title: '提示！',
      //         content: '出现错误：' + res.data.msg,
      //         success: function(res){
      //           if(res.confirm){
      //             console.log('用户点击确定')
      //           }
      //           else if(res.cancel){
      //             console.log('用户点击取消')
      //           }
      //         }
      //       })
      //     }
      //     else if(res.data.error_code == 0){
      //       wx.showModal({
      //         title: '恭喜！',
      //         content: '注册成功！',
      //         showCancel: false,
      //         success(res) {},
      //         complete: function(res){
      //           wx.reLaunch({
      //             url: '/pages/square/square'
      //           })
      //         }
      //       })
      //     }
      //   }
      // })
    }
  },

  usernameInput:function(e){
    this.data.username=e.detail.value
  },

  phoneInput:function(e){
    this.data.phone=e.detail.value
  },

  passwordInput:function(e){
    this.data.password=e.detail.value
  },

  passwordackInput:function(e){
    this.data.passwordack=e.detail.value
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