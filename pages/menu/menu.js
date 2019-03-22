// pages/menu/menu.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    swiperTitle: [{
      text: "商品",
      id: 1
    }, {
      text: "评价",
      id: 2
    }, {
        text: "商家",
      id: 3
    }],
    order: [],
    menu: [],
    clientHeight: 0,
    currentPage: 0,
    selected: 0,
    howMuch: 12,
    cost: 0,
    pullBar: false,
    currentTab: 0,  //对应样式变化  
    orderCount: 0,//添加到购物车的商品数量
    trolleyHidden: true, //是否显示购物车
    trolleyTap: 0,
    
    isCollect: "../../images/collection.png",
    collectCount: 0,
    commentChangeAll:false, //切换全部
    commentChangeOn:true, //切换点评

    commentAll:[], 
    commentGrate: [{            //点评
      userImg: "../../images/avatar7.png",
      userName: "VcT1113902",
      points: 4.5,
      time: "2018.03.29",
      content: "环境不错啦啦啦～，就是感觉速度慢一点，美团券价格还可以，在夏天，喝冰冰凉凉的奶茶味道感觉都棒棒哒 。就是天太热了，不太愿意出来买了，外卖的话起送价太高了。反正总体还不错，这么多家奶茶店里比较喜欢这一家啦。"
    }, {
      userImg: "../../images/avatar8.png",
      userName: "faye小小",
      points: 4.9,
      time: "2018.03.28",
      content: "奶盖红茶真的是我喝过最好喝的了 茶味浓 还有一个椰子西米露也巨好喝 奶味很足 加冰之后我觉得味道更好 不过大冬天还是喝热的比较好 毕竟身体比较重要 哈哈哈哈哈哈 价格液比较实惠  服务态度也很好 店员都超热情"
    }, {
      userImg: "../../images/avatar6.png",
      userName: "MVQ7888362",
      points: 4.3,
      time: "2018.03.24",
      content: "点了从来没喝过的金桔柠檬西米露，可能是因为西米露还在煮，所以等了比较长时间，但是味道还是挺好的"
    }, {
      userImg: "../../images/avatar5.png",
      userName: "吃出一片天",
      points: 4.7,
      time: "2018.03.19",
      content: "挺好的，服务态度也好，奶茶我也喜欢喝，就是有时候会忘记让他帮我少放糖，自己口味原因。"
    }], //用户评价

    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }  
  },

  toPay: function(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  // toGood:function(){
  //   wx.navigateTo({
  //     url: '../good/good',
  //   })
  // },

  btnAll:function(){
    this.setData({
      commentChangeAll: false,
      commentChangeOn: true,
    })
  },

  btnOn: function () {
    this.setData({
      commentChangeAll: true,
      commentChangeOn: false,
    })
  },

  pullBar: function () {
    this.setData({
      pullBar: !this.data.pullBar
    })
  },

  addGoods(event) {
    var index = event.currentTarget.dataset.index;
    this.data.goods.splice(this.data.goods.length, 0, this.data.order[index]);
    this.data.total = this.data.total + this.data.order[index]['money'];
    this.data.orderCount = this.data.orderCount + 1;
    console(this.data.orderCount)
    this.setData({
      total: this.data.total,
      orderCount: this.data.orderCount
    })
  },

  addToTrolley: function (e) {
    var info = this.data.menu;
    info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb++;
    var info2 = this.data.goods;
    info2.numb++;
    this.data.orderCount = this.data.orderCount + 1;
    this.setData({
      cost: this.data.cost + this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
      menu: info,
      goods: info2,
      orderCount: this.data.orderCount
    })
  },

  removeFromTrolley: function (e) {
    var info = this.data.menu;
    if (info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb != 0) {
      info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb--;
      this.data.orderCount = this.data.orderCount - 1;
      this.setData({
        cost: this.data.cost - this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
        menu: info,
        orderCount: this.data.orderCount
      })
    }
  },

  appearTrolley: function (e) {
    var tap = this.data.trolleyTap;
    tap ++;
    this.setData({
      trolleyTap: tap
    })
    if (this.data.trolleyTap % 2 == 1){
      if (this.data.orderCount != 0) {
        console.log("ok");
        this.setData({
          trolleyHidden: false
        })
      }
    } else{
      this.setData({
        trolleyHidden: true
      })
    }
    
  },

  turnPage: function (e) {
    this.setData({
      currentPage: e.currentTarget.dataset.index
    })
  },

  turnTitle: function (e) {
    if (e.detail.source == "touch") {
      this.setData({
        currentPage: e.detail.current
      })
    }
  },

  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
  },

  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化  
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部  
    })
    //刷新右侧内容的数据  
    var screenId = this.data.screenId;
    request.sendRrquest(API_queryClassify, 'POST', { flag: 1, screenId: screenId }, )
      .then(function (res) {
        console.log("返回数据：");
        that.setData({
          childrenArray: res.data.data.screenArray[0],
        })
        console.log(that.data.childrenArray);
      }, function (error) { console.log("返回失败"); });
  },

  //收藏按钮
  collect: function (e){
    var that = this;
    this.data.collectCount++;
    let param = {
      user_id: app.globalData.userInfo[0].id,
      shop_id: that.data.shopId
    }
    if(this.data.collectCount%2==0){
      this.setData({
        isCollect: "../../images/collection.png"
      })
      console.log('点击后不收藏 collectCount:', this.data.collectCount)
      wx.request({
        url: `${app.globalData.baseUrl}/api/ncollect`,
        data: param,
        method: "POST",
        success: function (res) {
          console.log('不收藏：', res.data);
        }
      });
    } else{
      this.setData({
        isCollect: "../../images/collection1.png"
      })
      console.log('点击后收藏 collectCount:', this.data.collectCount)
      
      wx.request({
        url: `${app.globalData.baseUrl}/api/collect`,
        data: param,
        method: "POST",
        success: function (res) {
          console.log('收藏：', res.data);
        }
      });

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var h = wx.getSystemInfoSync().windowHeight;
    this.setData({
      clientHeight: h * 0.4,
      shopId: options.id
    })  
    // console.log('onLoad collectCount:',this.data.collectCount)
    // console.log('options:',options);
    //获取商铺信息
    wx.request({
      url: `${app.globalData.baseUrl}/api/getShopById`,
      data: options,
      method: "POST",
      success: function (res) {
        console.log('商铺信息：',res.data);
        let dis = res.data.result[0].discount;
        let d = dis.split(',');
        res.data.result[0].discount = d;
        that.setData({
          shop: res.data.result,
        })
      }
    });

    //判断是否收藏
    let param = {
      user_id: app.globalData.userInfo.id,
      shop_id: options.id
    }
    // console.log('param:',param)
    wx.request({
      url: `${app.globalData.baseUrl}/api/isCollect`,
      data: param,
      method: "POST",
      success: function (res) {
        console.log('是否收藏：', res.data);
        
        if (res.data.status == 1){
          that.setData({
            isCollect: "../../images/collection1.png",
            collectCount: 1
          })
        } 
      }
    });

    //获取商品
    wx.request({
      url: `${app.globalData.baseUrl}/api/getGood`,
      data: {shop_id: options.id},
      method: "POST",
      success: function (res) {
        console.log('商品信息：',res.data)
        let typeName = [];
        let array = [];
        for(let good of res.data.result){
          good.numb = 0;
          array.push(good.type);
        }
        //typeName去重
        let arrayi = [];
        for (let i = 0; i < array.length; i++) {
          // console.log('array:', i, ':', array[i]);
          if (typeName.indexOf(array[i]) == -1){
            typeName.push(array[i]);
          }
        }
        let menu = [];
        let json = {};
        for (let i = 0; i < typeName.length; i++) {
          // console.log('typeName:',i, ':', typeName[i]);
          json = {
            typeName: typeName[i]
          };
          menu.push(json);
        }
        let menuContent = [];
        for (let good of res.data.result) {
          for (let i = 0; i < menu.length; i++){
            menu[i].menuContent = menuContent;
            if (good.type == menu[i].typeName) {
              console.log(i,' ','相等：',menu[i].typeName)
              console.log('good：', good)
              menu[i].menuContent.push(good);
              console.log('menu[0]:' + menu[0].menuContent)
              console.log('menu[1]:' + menu[1].menuContent)
              break;
            } else {
              console.log('不相等:',i)
            }
          }
        }
        console.log('menu:', menu)
        that.setData({
          menu: menu
        })

      }
    })

    //获取评价
    wx.request({
      url: `${app.globalData.baseUrl}/api/getEvaluationWithUser`,
      data: {shop_id: options.id},
      method: "POST",
      success: function (res) {
        console.log('评价信息：', res.data.result);
        let all = [];
        let grate = [];
        for (let comment of res.data.result){
          comment.updated_at = that.timeFormat(comment.updated_at);
          if(comment.grate == 0){
            all.push(comment);
          } else{
            grate.push(comment)
          }
        }
        that.setData({
          evaluation: all,
          commentAll: all,
          commentGrate: grate
        })
      }
    })
   
  },
  
  //全部评价
  tagAll:function(){
    var that = this;
    that.setData({
      commentAll: that.data.evaluation
    })
  },

  //好评
  tagGrate: function () {
    var that = this;
    let eva = [];
    for(let e of that.data.evaluation){
      if(e.point >= 3.0){
        eva.push(e);
      }
    }
    that.setData({
      commentAll: eva
    })
  },

  //差评
  tagBad: function () {
    var that = this;
    let eva = [];
    for (let e of that.data.evaluation) {
      if (e.point < 3.0) {
        eva.push(e);
      }
    }
    that.setData({
      commentAll: eva
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

  },
  // 时间格式化
  timeFormat(e) {
    var time = e;
    var d = new Date(time);
    var times = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
    return times;
  },
})