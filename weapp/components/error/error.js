"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    isShow: false
  },
  props: {
    isFailure: {
      type: Boolean,
      "default": false
    }
  },
  events: {},
  watch: {
    isFailure: function isFailure() {
      var _this = this;

      if (this.isFailure) {
        this.isShow = this.isFailure;
      } else {
        setTimeout(function () {
          _this.isShow = _this.isFailure;
        }, 300);
      }
    }
  },
  methods: {
    refresh: function refresh() {
      this.$emit('refresh');
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'103-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.refresh($event)
      })();
    
  }}}, models: {} });