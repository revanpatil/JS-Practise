var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer("Martin", "Garrix");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
