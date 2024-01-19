const prompt = require('prompt-sync')();
let choice="y";
while(choice=="y"){
        let num1=Number(prompt("Enter the First Number :\t"));
        let num2=Number(prompt("Enter the Second number :\t"));
        let op=prompt("Choose an Operator(+,-,/,*) :\t");
        switch(op){
            case '+':console.log("the sum of the Numbers is:",num1+num2);
                     break;
            case '-':console.log("the difference two numbers are:",num1-num2);
                     break;
            case '*':console.log("the product of the numbers are:",num1*num2);
                     break;
            case '/':console.log*("the qoutient of the numbers are:",num1/num2);
                     break;
            default:console.log("invalid choice");                        
                      
        }
        choice=prompt("Do you want to do it again?:");
    }
    


