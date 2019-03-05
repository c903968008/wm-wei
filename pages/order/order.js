// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      shopName: "奶茶博士",
      state: "订单已完成",
      img: "../../images/logo1.png",
      date: "2018-04-05",
      time: "20:13:22",
      list: [{
        name: "奶茶三兄弟",
        num: 1
      }],
      goodsCount: 1,
      totalPrice: 9
    }, {
      shopName: "新白鹿餐厅",
      state: "订单已完成",
      img: "../../images/logo14.png",
      date: "2018-04-04",
      time: "12:05:44",
      list: [{
        name: "蛋黄鸡翅",
        num: 1
      }, {
        name: "剁椒鱼头",
        num: 1
      }, {
          name: "青柠冰桔茶",
          num: 2
      }, {
        name: "天水豆腐",
        num: 1
      }],
      goodsCount: 5,
      totalPrice: 87
      }, {
        shopName: "奶茶博士",
        state: "订单已完成",
        img: "../../images/logo1.png",
        price: "9",
        date: "2018-04-05",
        time: "20:13:22",
        howToDistribute: "奶茶博士"
    }, {
      shopName: "奶茶博士",
      state: "订单已完成",
      img: "../../images/logo1.png",
      price: "9",
      date: "2018-04-05",
      time: "20:13:22",
      howToDistribute: "奶茶博士"
    }]
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