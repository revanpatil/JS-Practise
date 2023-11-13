import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(5,10,15);
let myRectangle = new Rectangle(5,10,15,20);

let shape : Shape[] = [];
shape.push(myCircle);
shape.push(myRectangle);

for(let temp of shape){
    console.log(temp.getInfo());
    console.log(temp.calcArea());
}