let childrenAge=5;
let isStudent =true;
let seniorCitizenAge=80;
let regularTicketFare=800;
if (childrenAge<10 || isStudent==true ||seniorCitizenAge>=60) { 
    if(childrenAge<10) {
        console.log("Okey You are a children so your ticket fare is free");
    }
    if(isStudent==true){
        console.log(`You are a student for this reason you got 50% discount, your fare is ${regularTicketFare-400}`);
    } 
    if (seniorCitizenAge>=60){
        console.log(`you are a senior citizen so you got 15% discount, your fare is ${regularTicketFare-120}`);
    } 
}
else {
    console.log(`okey you are not eligible for discount so your fare is ${regularTicketFare}`);
}
