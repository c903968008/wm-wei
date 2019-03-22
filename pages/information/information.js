// pages/information/information.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindViewTap: function () {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo')
    wx.chooseImage({
      // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
      count: 1,
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 获取成功,将获取到的地址赋值给临时变量
        var tempFilePaths = res.tempFilePaths;
        // console.log('userInfo前:', that.data.userInfo)
        // console.log('tempFilePaths:', tempFilePaths);
        that.data.userInfo.avatar = tempFilePaths[0];
        app.globalData.userInfo.avatar = tempFilePaths[0];
        let u = that.data.userInfo;
        that.setData({
          userInfo: u
        })
        wx.setStorage({
          key: 'userInfo',
          data: u
        })
        // console.log('userInfo后:', that.data.userInfo);
        // console.log('userInfo后appss:', app.globalData.userInfo);
        let param = {
          id: userInfo.id,
          avatar: tempFilePaths[0]
        }
        console.log('param:',param);
        wx.request({
          url: `${app.globalData.baseUrl}/api/editAvatar`,
          data: param,
          method: 'POST',
          success(res) {
            console.log('修改头像：', res);
          }
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo')
    this.setData({
      userInfo: userInfo
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