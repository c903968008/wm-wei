// pages/collection/collection.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant: [{
      src: "../../images/logo10.png",
      name: "乐堡士",
      sales: 50,
      distance: 542
    }, {
      src: "../../images/logo7.png",
      name: "丽涛熟食店",
      sales: 23,
      distance: 1356
    }, {
      src: "../../images/logo5.png",
      name: "旺德福",
      sales: 365,
      distance: 752
    }, {
        src: "../../images/logo3.png",
      name: "快乐芋站",
      sales: 62,
      distance: 5639
    }, {
        src: "../../images/logo4.png",
      name: "御粥轩",
      sales: 71,
      distance: 1692
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: `${app.globalData.baseUrl}/api/getCollection`,
      data: { user_id: app.globalData.userInfo.id},
      method: 'POST',
      success(res){
        console.log('收藏商铺信息：',res.data.result);
        that.setData({
          restaurant: res.data.result
        })
      }
    })
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