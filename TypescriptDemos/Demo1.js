var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Hi Constreuctor....! ");
    }
    Demo.prototype.abc = function () {
        console.log("HI method ....!");
    };
    return Demo;
}());
var d = new Demo();
d.abc();
