Page({
  data: {
    h: 0,
    color: 'red',
    hei:600
  },
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync().windowHeight);
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      h: height
    })
    console.log(this.data.h);
  }
})
