import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let theGolf = new GolfCoach();
let theCricket = new CricketCoach();

let coaching : Coach[] = [];
coaching.push(theGolf);
coaching.push(theCricket);

for(let temp of coaching){
    console.log(temp.getCoaching());
}