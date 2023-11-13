import { Shape } from "./shape";

export class Circle extends Shape{

    constructor(private theX : number,private theY : number, private _radius: number){
        super(theX,theY);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): String {
        return super.getInfo() +  `, radius = ${this._radius}`;
    }

}