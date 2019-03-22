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
      password: e.detail.value
    })
  },

  submit(){
    var that = this;
    var u = wx.getStorageSync('userInfo')
    let param = {
      id: u.id,
      password: that.data.password
    }
    console.log('param:', param);
    wx.request({
      url: `${app.globalData.baseUrl}/api/editPassword`,
      data: param,
      method: 'POST',
      success(res) {
        console.log('修改密码：', res.data);
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