"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var mySymbol = Symbol();

console.log(typeof mySymbol === "undefined" ? "undefined" : _typeof(mySymbol)); //打印结果：symbol
console.log(mySymbol); //打印结果：Symbol()
