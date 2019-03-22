// pages/discount/discount.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discount:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('app:',app.globalData.userInfo)
    var that = this;
    wx.request({
      url: `${app.globalData.baseUrl}/api/getCouponByUserId`,
      data: { user_id : app.globalData.userInfo.id},
      method: 'POST',
      success(res){
        console.log('优惠券信息：',res.data);
        for (let dis of res.data.result){
          dis.exp = that.timeFormat(dis.exp);
        }
        that.setData({
          discount: res.data.result
        })
      }
    })
  },

  // 时间格式化
  timeFormat(e) {
    var time = e;
    var d = new Date(time);
    var times = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
    return times;
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