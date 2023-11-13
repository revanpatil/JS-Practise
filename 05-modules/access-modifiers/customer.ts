class Customer{
    private _firstName : String;
    private _lastName : String;

    constructor(theFirst :String,theLast:String){
        this._firstName = theFirst;
        this._lastName = theLast
    }

    public get firstName() : String{
        return this._firstName;
    }

    public set firstName(value : String){
        this._firstName = value;
    }

    public get lastName() : String{
        return this._lastName;
    }

    public set lastName(value : String){
        this._lastName = value;
    }

}


//lets create an instance

let myCustomer = new Customer("Martin","Garrix");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);