// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: '退出登录'
  },
  toOrder:function(){
    wx.switchTab({
      url: '../order/order',
    })
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      success: function (res) {
        that.setData({
          result: res.result
        })
      },
      fail: function (res) {
      }
    })
  },

  //退出账号
  signOut: function(){
    if(this.data.login == '退出登录'){
      wx.removeStorage({
        key: 'userInfo',
        success: function (res) {
          console.log('退出登录：', res)
          wx.switchTab({
            url: '../home/home'
          })
        }
      })
    } else {
      wx.redirectTo({
        url: '../login/login',
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo')
    console.log('userInfo:', userInfo);
    if(userInfo){
      this.setData({
        userInfo: userInfo
      })
    } else{
      this.setData({
        login: '登录',
        userInfo: {
          name: '请登录',
          avatar: '../../images/logo.png'
        }
      })
    }
    
    // console.log('this.data.userInfo:', this.data.userInfo)
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
    this.onLoad();
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
  
  }
})