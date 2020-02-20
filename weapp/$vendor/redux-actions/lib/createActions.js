"use strict";

exports.__esModule = true;
exports.default = createActions;

var _invariant = _interopRequireDefault(__wepy_require(35));

var _isPlainObject = _interopRequireDefault(__wepy_require(13));

var _isFunction = _interopRequireDefault(__wepy_require(6));

var _identity = _interopRequireDefault(__wepy_require(11));

var _isArray = _interopRequireDefault(__wepy_require(14));

var _isString = _interopRequireDefault(__wepy_require(10));

var _isNil = _interopRequireDefault(__wepy_require(15));

var _getLastElement = _interopRequireDefault(__wepy_require(16));

var _camelCase = _interopRequireDefault(__wepy_require(45));

var _arrayToObject = _interopRequireDefault(__wepy_require(17));

var _flattenActionMap = _interopRequireDefault(__wepy_require(24));

var _unflattenActionCreators = _interopRequireDefault(__wepy_require(18));

var _createAction = _interopRequireDefault(__wepy_require(33));

var _constants = __wepy_require(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = (0, _isPlainObject.default)((0, _getLastElement.default)(identityActions)) ? identityActions.pop() : {};
  (0, _invariant.default)(identityActions.every(_isString.default) && ((0, _isString.default)(actionMap) || (0, _isPlainObject.default)(actionMap)), 'Expected optional object followed by string action types');

  if ((0, _isString.default)(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }

  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}

function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = (0, _flattenActionMap.default)(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return (0, _unflattenActionCreators.default)(flatActionCreators, options);
}

function actionMapToActionCreators(actionMap, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      prefix = _ref.prefix,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? _constants.DEFAULT_NAMESPACE : _ref$namespace;

  function isValidActionMapValue(actionMapValue) {
    if ((0, _isFunction.default)(actionMapValue) || (0, _isNil.default)(actionMapValue)) {
      return true;
    }

    if ((0, _isArray.default)(actionMapValue)) {
      var _actionMapValue$ = actionMapValue[0],
          payload = _actionMapValue$ === void 0 ? _identity.default : _actionMapValue$,
          meta = actionMapValue[1];
      return (0, _isFunction.default)(payload) && (0, _isFunction.default)(meta);
    }

    return false;
  }

  return (0, _arrayToObject.default)(Object.keys(actionMap), function (partialActionCreators, type) {
    var _objectSpread2;

    var actionMapValue = actionMap[type];
    (0, _invariant.default)(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = (0, _isArray.default)(actionMapValue) ? _createAction.default.apply(void 0, [prefixedType].concat(actionMapValue)) : (0, _createAction.default)(prefixedType, actionMapValue);
    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
  });
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = (0, _arrayToObject.default)(identityActions, function (partialActionMap, type) {
    var _objectSpread3;

    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = _identity.default, _objectSpread3));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return (0, _arrayToObject.default)(Object.keys(actionCreators), function (partialActionCreators, type) {
    var _objectSpread4;

    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[(0, _camelCase.default)(type)] = actionCreators[type], _objectSpread4));
  });
}