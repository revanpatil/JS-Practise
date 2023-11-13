import { Coach } from "./Coach";

export class CricketCoach implements Coach{


    getCoaching(): String {
       return "Practise Spin bowling";
    }

}