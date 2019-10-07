"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _exif2css = _interopRequireDefault(require("exif2css"));

var _exif_orientation = _interopRequireDefault(require("./exif_orientation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rotationCSS = function rotationCSS(imageBlob) {
  var orientation = (0, _exif_orientation["default"])(imageBlob);
  var css = (0, _exif2css["default"])(orientation);
  var style = {};

  if (css["transform"]) {
    style["transform"] = css["transform"];
  }

  if (css["transform-origin"]) {
    style["transform-origin"] = css["transform-origin"];
  }

  return style;
};

var _default = rotationCSS;
exports["default"] = _default;