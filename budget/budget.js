const prompt = require('prompt-sync')();
//Creating all the objects
let income ={};
let expense ={};
//Function to add the income source
let addInc=()=>{
    let inc = prompt('Enter the source of income :');
    let amt = Number(prompt('Enter the amount :'));
    income[inc]=amt;
    console.log(inc,' Successfully added');
}
//function to remove  the income source
let removeInc=()=>{
    console.log("Displaying the source of income :");
    for(let src in income){
      console.log(`${src} ${income[src]}`)
    }
    let srcItm = prompt('Enter the source to be removed :');
    delete income[srcItm];
    console.log(srcItm," Succesfully removed");
}
//Function to display the imcome source
let displayInc=()=>{
    console.log("Displaying the source of income :");
    for(let src in income){
      console.log(`${src} ${income[src]}`)
    } 
    while(true){
        let choice=prompt("1.ADD 2.REMOVE 3.back :");
        switch(choice){
            case '1':addInc();
                    break;
            case '2':removeInc();
                    break;
            case '3':return;
                    break;
            default :console.log('Invalid choice')
                    break;
        }
    }
}
//Function to add the expence source
let addExp=()=>{
    let exp = prompt('Enter the Expences item :');
    let amt = Number(prompt('Enter the amount :'));
    expense[exp]=amt;
    console.log(exp,' Successfully added');
}
//Function to remove the exoences item
let removeExp=()=>{
    console.log("Your Expenses Item :");
    for(let src in expense){
      console.log(`${src} ${expense[src]}`)
    }
    let srcItm = prompt('Enter the Item to be removed to be removed :');
    delete expense[srcItm];
    console.log(srcItm," Succesfully removed");
}
//Functio to display expences item
let displayExp=()=>{
    console.log("Displaying the Expences item :");
    for(let src in expense){
      console.log(`${src} ${expense[src]}`)
    } 
    while(true){

        let choice=prompt("1.ADD 2.REMOVE 3.back :");
        switch(choice){
            case '1':addExp();
                    break;
            case '2':removeExp();
                    break;
            case '3':return;
                    break;
            default :console.log('Invalid choice')
                    break;
        }
    }
}
//Function to check the balance
let balance=()=>{
    let totalInc=0;
    let totalExp=0;
    for(let src in income){
        totalInc+=income[src];
    }
    for(let src in expense){
        totalExp+=expense[src];
    }
    console.log(`
    Total Income     ${totalInc}
    Total Expences   ${totalExp}
    Balance          ${totalInc-totalExp} `)
}
console.log('-------------Budget calculator-------------');
while(true){

    let ch =prompt('1.Check Income 2.Check Expenses 3.Check Balance :');
    switch(ch){
        case '1':displayInc();
                break;
        case '2':displayExp();
                break;
        case '3':balance();
                break;
        default:console.log('invalid operator');
                break;
    }
}
