"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    items: [{
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216582503799492608.jpg'
    }, {
      url: 'http://sersms.com:7000/house/v1/file/static/userfile/202001/13/1216581838603849728.jpg'
    }],
    current: 1,
    autoplay: false,
    circular: true
  },
  props: {
    isData: {
      type: Object,
      "default": {}
    }
  },
  events: {},
  methods: {
    onHandleLargeImage: function onHandleLargeImage(index) {
      wx.previewImage({
        current: this.items[index].url,
        urls: [this.items[0].url, this.items[1].url]
      });
    },
    onHandleSwiperChange: function onHandleSwiperChange(e) {
      var current = e.$wx.detail.current;
      this.current = current + 1;
    },
    exeAjaxHouseFollow: function exeAjaxHouseFollow() {
      var _this = this;

      var house_id = this.$wx.options.house_id;
      this.ajaxHouseFollow({
        house_id: house_id
      }).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this.showToast('收藏成功');
        } else {
          _this.showToast('收藏失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this.showToast('收藏失败');

        console.log(err);
      });
    },
    exeAjaxHouseUnfollow: function exeAjaxHouseUnfollow() {
      var _this2 = this;

      var house_id = this.$wx.options.house_id;
      this.ajaxHouseUnfollow({
        house_id: house_id
      }).then(function (res) {
        var success = res.payload.success;

        if (success) {
          _this2.showToast('取消收藏成功');
        } else {
          _this2.showToast('取消收藏失败');
        }

        console.log(res);
      })["catch"](function (err) {
        _this2.showToast('取消收藏失败');

        console.log(err);
      });
    },
    onHandleFollow: function onHandleFollow() {
      this.exeAjaxHouseFollow();
    }
  },
  created: function created() {}
}, {info: {"components":{"lazy-image":{"path":"..\\lazy-image\\lazy-image"}},"on":{}}, handlers: {'110-25': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleSwiperChange($event)
      })();
    
  }},'110-26': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onHandleLargeImage(index)
      })();
    
  }},'110-27': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleFollow($event)
      })();
    
  }}}, models: {} });