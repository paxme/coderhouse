"use strict";

var randomColour = function randomColour() {
  var _ref = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)],
      r = _ref[0],
      g = _ref[1],
      b = _ref[2];
  return [r, g, b];
};