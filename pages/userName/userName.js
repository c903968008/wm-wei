// pages/userName/userName.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  input(e){
    // console.log('input携带数据为：', e.detail);
    this.setData({
      name: e.detail.value
    })
  },

  submit(){
    var that = this;
    var u = wx.getStorageSync('userInfo')
    u.name = that.data.name
    wx.setStorage({
      key: 'userInfo',
      data: u
    })
    let param = {
      id: u.id,
      name: that.data.name
    }
    console.log('param:', param);
    wx.request({
      url: `${app.globalData.baseUrl}/api/editUserName`,
      data: param,
      method: 'POST',
      success(res) {
        console.log('修改用户名：', res);
        if(res.data.status == 1){
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
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
  
  }
})