'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeaflet = require('react-leaflet');

require('leaflet/dist/leaflet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LeafletMap = function LeafletMap(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      mapProps = _objectWithoutProperties(_ref, ['width', 'height', 'children']);

  return _react2.default.createElement(
    _reactLeaflet.Map,
    _extends({}, mapProps, { style: { width: width, height: height } }),
    _react2.default.createElement(_reactLeaflet.TileLayer, {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '\xA9 <a href=\'http://osm.org/copyright\'>OpenStreetMap</a> contributors'
    }),
    children
  );
};

LeafletMap.propTypes = {
  center: _react.PropTypes.arrayOf(_react.PropTypes.number),
  zoom: _react.PropTypes.number,
  scrollWheelZoom: _react.PropTypes.bool,
  children: _react.PropTypes.node.isRequired,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

LeafletMap.defaultProps = {
  center: [0, 0],
  zoom: 0,
  width: '100%',
  height: 600,
  scrollWheelZoom: false
};

exports.default = LeafletMap;