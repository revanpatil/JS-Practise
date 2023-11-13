let reviews : number[] = [5,3,2,1,4];

let total : number =0;

for(let i = 0;i<reviews.length;i++){
    console.log(reviews[i]);
    total += reviews[i];
}


let average = total/reviews.length;

console.log("the average is " +average);