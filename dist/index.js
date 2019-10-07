"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _exif_orientation = _interopRequireDefault(require("./exif_orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rotationCSS = function rotationCSS(imageBlob) {
  var orientation = (0, _exif_orientation["default"])(imageBlob);
  return (0, _exif_orientation["default"])(orientation);
};

var _default = rotationCSS;
exports["default"] = _default;