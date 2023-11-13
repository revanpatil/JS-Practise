import { Shape } from "./shape";

export class Rectangle extends Shape{
    

    constructor(theX:number,theY:number,private _length: number,private _width: number){
        super(theX,theY);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): String {
        return super.getInfo() +`, width = ${this._width} , length = ${this._length}`;
    }

    calcArea(): number {

        return this.width*this._length;
        throw new Error("Method not implemented.");
    }
}
