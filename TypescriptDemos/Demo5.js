var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo5 = /** @class */ (function () {
    function Demo5() {
        this.myname = "prakash";
        console.log("hi Demo 5 Consttructor ....!");
    }
    return Demo5;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        var _this = 
        // let name="Suresh";
        _super.call(this) || this;
        _this.name = "Thanesh";
        console.log("Hi A class Cosntructro ....!" + _this.name);
        console.log("MY name is ....!" + _this.myname);
        return _this;
    }
    return A;
}(Demo5));
var a = new A();
