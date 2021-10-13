"use strict";
var suma = function (a, b) { return a + b; };
var randomColour = function () { return [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
]; };
console.log(randomColour());
