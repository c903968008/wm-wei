// pages/discount/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discount:[{
      img:"../../images/logo1.png",
      name:"奶茶博士",
      time:"2018-04-04",
      num:2,
      total:20
    }, {
      img: "../../images/logo2.png",
      name: "最高鸡密",
      time: "2018-04-15",
      num: 1,
      total: 15
      }, {
        img: "../../images/logo3.png",
        name: "快乐驿站",
        time: "2018-04-06",
        num: 3,
        total: 10
      },]
  },
  toMenu: function(){
    wx.navigateTo({
      url: '../menu/menu',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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