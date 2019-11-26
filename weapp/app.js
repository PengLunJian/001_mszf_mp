"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('vendor.js')(3));

var _core = _interopRequireDefault(require('vendor.js')(1));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _redux = _interopRequireDefault(require('vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_redux["default"]);

_core["default"].app({
  hooks: {
    // App 级别 hook，对整个 App 生效
    // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    'before-setData': function beforeSetData(dirty) {
      console.log('setData dirty: ', dirty);
      return dirty;
    }
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function onLaunch() {
    this.testAsync();

    _eventHub["default"].$on('app-launch', function () {
      console.log('app-launch event emitted, the params are:');

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log(args);
    });
  },
  methods: {
    sleep: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    },
    testAsync: function testAsync() {
      var d;
      return _regeneratorRuntime2["default"].async(function testAsync$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regeneratorRuntime2["default"].awrap(this.sleep(3));

            case 2:
              d = _context.sent;
              console.log(d);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });