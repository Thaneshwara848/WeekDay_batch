"use strict";
exports.__esModule = true;
var Demo11_1 = require("./Demo11");
var Demo12 = /** @class */ (function () {
    function Demo12() {
        console.log("Hi Demo 12 ");
    }
    return Demo12;
}());
var E = /** @class */ (function () {
    function E() {
        var v = new Demo11_1.A();
        console.log("E class " + v.name);
    }
    return E;
}());
var e = new E();
var a = new Demo11_1.A();
var b = new Demo11_1.B();
