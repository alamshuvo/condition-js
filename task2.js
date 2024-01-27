let personWeight=100;
let personheight=6.2*0.3048;
let calculateBmi= personWeight / (personheight ** 2);
if (calculateBmi<18.5) {
console.log("you are underweight");    
}
else if ((calculateBmi>=18.5) &&(calculateBmi<=24.9)) {
    console.log("you are normal");
}
else if((calculateBmi>=25) && (calculateBmi<=29.9)) {
    console.log("you are overweight");
}
else{
    console.log("you are obsese");
}