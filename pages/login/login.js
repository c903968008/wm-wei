var util = require("../../utils/util.js");
const app = getApp();

Page({
  data:{
    loginBtnTxt:"登录",
    loginBtnBgBgColor:"#0099FF",
    btnLoading:false,
    disabled:false,
    inputUserName: '',
    inputPassword: '',
    avatarUrl:"../../images/timg.png",
    logIcon:"../../images/logIcon.png",
    pwdIcon:"../../images/pwdIcon.png",
    telephone:'',
    password:'',
  },
  
  //手机号输入
  phoneInput: function(e){
    // var that = this;
    // console.log(e.detail.cursor)
    if(e.detail.cursor == 11){
      // console.log('value', e.detail.value)
      this.setData({
        telephone: e.detail.value
      })
      // console.log(this.data.userInfo.tel);
    }
  },

  //密码输入
  pswdInput: function(e){
    this.setData({
      password: e.detail.value
    })
  },
  
  //登录
  login: function(e){
    // console.log(' telephone:', this.data.telephone)
    // console.log(' password:', this.data.password)
    let param = {
      telephone: this.data.telephone,
      password: this.data.password
    }
    wx.request({
      url: `${app.globalData.baseUrl}/api/login`,
      data: param,
      method: 'POST',
      success(res) {
        console.log(res)
        if(res.data.status == 1){
          wx.switchTab({
            url: '../home/home',
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: none,
          })
        }
        
      }
    })
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  /*formSubmit:function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value.username,'+',e.detail.value.password)
    var param = e.detail.value;
    this.mysubmit(param);
    wx.request({
      url: "",
      data: {
        email: "e.detail.value.username",
        password: "e.detail.value.password"
      },
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        wx.redirectTo({
          url: '../home/home',
        })
      },
      fail: function () {
        console.log("失败")
      }
    })      
  },
  mysubmit:function (param){
    var flag = this.checkUserName(param)&&this.checkPassword(param)
    if(flag){
        this.setLoginData1();
        this.checkUserInfo(param);
    } 
  },
  setLoginData1:function(){
    this.setData({
      loginBtnTxt:"登录中",
      disabled: !this.data.disabled,
      loginBtnBgBgColor:"#999",
      btnLoading:!this.data.btnLoading
    });
  },
  setLoginData2:function(){
    this.setData({
      loginBtnTxt:"登录",
      disabled: !this.data.disabled,
      loginBtnBgBgColor:"#0099FF",
      btnLoading:!this.data.btnLoading
    });
  },
  checkUserName:function(param){
    var email = util.regexConfig().email; 
    var phone = util.regexConfig().phone;
    var inputUserName = param.username.trim();
    if(email.test(inputUserName)||phone.test(inputUserName)){
      return true;
    }else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '请输入正确的邮箱或者手机号码'
      });
      return false;
    }
  },
  checkPassword:function(param){
    var userName = param.username.trim();
    var password = param.password.trim();
    if(password.length<=0){
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '请输入密码'
      });
      return false;
    }else{
      return true;
    }
  },
  checkUserInfo:function(param){
    var username = param.username.trim();
    var password = param.password.trim();
    var that = this;
    if((username=='admin@163.com'||username=='13888888881')&&password=='admin'){
        setTimeout(function(){
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
          });
          that.setLoginData2();
          that.redirectTo(param);
        },2000);
    }else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '用户名或密码有误，请重新输入'
      });
      this.setLoginData2();
    }
  },
  redirectTo:function(param){
    //需要将param转换为字符串
    param = JSON.stringify(param);
    wx.redirectTo({
      url: '../home/home?param='+ param//参数只能是字符串形式，不能为json对象
    })
  }*/

})