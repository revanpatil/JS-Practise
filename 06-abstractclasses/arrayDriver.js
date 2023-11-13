"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCircle = new circle_1.Circle(5, 10, 15);
var myRectangle = new rectangle_1.Rectangle(5, 10, 15, 20);
var shape = [];
shape.push(myCircle);
shape.push(myRectangle);
for (var _i = 0, shape_1 = shape; _i < shape_1.length; _i++) {
    var temp = shape_1[_i];
    console.log(temp.getInfo());
    console.log(temp.calcArea());
}
