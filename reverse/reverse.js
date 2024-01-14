const prompt = require('prompt-sync')();
//write a js program to reverse a string
let str = prompt('Enter a string :');
let revStr = [];
let count = 0;
str=Array.from(str);
for(let i=str.length-1;i>=0;i--){
    revStr[count]=str[i];
    count++;
}

revStr = revStr.join('');
console.log('Reversed string is :',revStr);