let number=10;
if (number===number) {
    if ((number>=90)&&(number<100)) {
        console.log("Wow you got A+");
    }
    else if ((number>=80)&&(number<89)) {
        console.log("Okey your grade is B");
    }

    else if ((number>=70)&&(number<79)) {
        console.log("Okey your grade is C");
    }
    else if((number>=60)&&(number<69)) {
        console.log("Okey your grade is D");
    }
    else if((number>=0)&&(number<59)) {
        console.log("oops ! your grade is F try again stay connected with us ");
    }
}
else{
    console.log("please input valid number");
}
