// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "上海市松阳区文汇路980弄6号",
    time: "11:45",
    tel: 15754336950,
    shopImg: "../../images/logo1.png",
    shopName: "奶茶博士",
    good:[{
      img:"../../images/good1.png",
      name:"奶茶三兄弟",
      money:9
    }],
    way: "在线支付",
    total: 9
  },
  toOrder: function () {
    wx.switchTab({
      url: '../order/order',
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