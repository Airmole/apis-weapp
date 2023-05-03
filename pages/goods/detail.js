// pages/goods/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amount: 1,
    buyer_name: '',
    buyer_mobile: '',
    buyer_region: ['天津市', '天津市', '和平区'],
    buyer_address: '',
    buyer_message: '',
    buyer_idcard: '',
    goods: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchGoodsDetail(options.id)
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
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  amountChanged (e) {
    const amount = e.detail.value
    this.setData({ amount: amount })
  },
  buyerNameChanged (e) {
    const buyer_name = e.detail.value
    this.setData({ buyer_name: buyer_name })
  },
  buyerMobileChanged (e) {
    const buyer_mobile = e.detail.value
    this.setData({ buyer_mobile: buyer_mobile })
  },
  buyerAddressChanged (e) {
    const buyer_address = e.detail.value
    this.setData({ buyer_address: buyer_address })
  },
  buyerIdcardChanged (e) {
    const buyer_idcard = e.detail.value
    this.setData({ buyer_idcard: buyer_idcard })
  },
  buyerMessageChanged (e) {
    const buyer_message = e.detail.value
    this.setData({ buyer_message: buyer_message })
  },
  buyerRegionChange (e) {
    this.setData({
      buyer_region: e.detail.value
    })
  },
  fetchGoodsDetail (id) {
    var _this = this
    wx.request({
      url: app.globalData.apiDomain + `/goods/${id}`,
      success (res) {
        console.log(res.data)
        _this.setData({ goods: res.data })
      }
    })
  },
  submitOrder () {
    const data = {
      buy_period: this.data.amount,
      sale_mode: this.data.goods.sale_mode,
      goods_id: this.data.goods.id,
      amount: this.data.amount,
      buyer_name: this.data.buyer_name,
      buyer_mobile: this.data.buyer_mobile,
      buyer_province: this.data.buyer_region[0],
      buyer_city: this.data.buyer_region[1],
      buyer_county: this.data.buyer_region[2],
      buyer_address: this.data.buyer_address,
      buyer_idcard: this.data.buyer_idcard,
      buyer_message: this.data.buyer_message
    }
    wx.request({
      url: app.globalData.apiDomain + `/order`,
      method: 'POST',
      data: data,
      success (res) {
        if (res.statusCode == 422) {
          wx.showToast({
            title: res.data.message,
          })
        } else {
          wx.showToast({
            title: '下单成功',
          })
          this.data.modalName = null
        }
      },
      fail (res) {
        wx.showToast({
          title: res,
        })
      }
    })
  }
})