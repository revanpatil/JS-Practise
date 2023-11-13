"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
//lets create an instance
var myCustomer = new customer_1.Customer("Martin", "Garrix");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
