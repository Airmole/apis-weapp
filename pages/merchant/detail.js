// pages/merchant/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchant: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const merchantId = options.id
    console.log('商户id', options.id)
    this.getMerchant(merchantId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getMerchant (merchantId) {
    var _this = this
    wx.request({
      url: app.globalData.apiDomain + `/merchant/${merchantId}`,
      success (res) {
        console.log(res.data)
        _this.setData({ merchant: res.data })
      }
    })
  }
})