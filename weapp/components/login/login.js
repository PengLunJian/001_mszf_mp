"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    isShow: true
  },
  props: {},
  events: {},
  watch: {},
  methods: {
    onHandleLogin: function onHandleLogin() {
      console.log(1);
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'107-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleLogin($event)
      })();
    
  }}}, models: {} });