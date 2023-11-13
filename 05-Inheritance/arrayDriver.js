"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(10, 15);
var myCircle = new circle_1.Circle(5, 10, 15);
var myRectangle = new rectangle_1.Rectangle(5, 10, 15, 20);
var shape = [];
shape.push(myShape);
shape.push(myCircle);
shape.push(myRectangle);
for (var _i = 0, shape_2 = shape; _i < shape_2.length; _i++) {
    var temp = shape_2[_i];
    console.log(temp.getInfo());
}
