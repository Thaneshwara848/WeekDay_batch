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
var Demo4 = /** @class */ (function () {
    function Demo4(id, name, age) {
        this.site = 5;
        this.money = 500000;
        console.log("Hi " + name + " My age is :  " + age);
    }
    Demo4.prototype.abc = function () {
        console.log("Hi abc Method.....!");
    };
    return Demo4;
}());
var Demo6 = /** @class */ (function (_super) {
    __extends(Demo6, _super);
    function Demo6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Demo6;
}(Demo4));
var dd = new Demo4("ABC123", "Thanesh", 26);
dd.abc();
