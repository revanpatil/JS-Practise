class Customer{
    firstName : String;
    lastName : String;

    constructor(theFirst :String,theLast:String){
        this.firstName = theFirst;
        this.lastName = theLast
    }
}


//lets create an instance

let myCustomer = new Customer("Martin","Garrix");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);