"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var theGolf = new GolfCoach_1.GolfCoach();
var theCricket = new CricketCoach_1.CricketCoach();
var coaching = [];
coaching.push(theGolf);
coaching.push(theCricket);
for (var _i = 0, coaching_1 = coaching; _i < coaching_1.length; _i++) {
    var temp = coaching_1[_i];
    console.log(temp.getCoaching());
}
