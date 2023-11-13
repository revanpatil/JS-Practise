import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(10,15);
let myCircle = new Circle(5,10,15);
let myRectangle = new Rectangle(5,10,15,20);

console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo())