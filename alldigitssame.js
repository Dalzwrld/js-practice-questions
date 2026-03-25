//All digits similar within a number

let num = 1111;

let numStr = num.toString();
let allSame = true;

for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== numStr[0]) 
    allSame = false;
} 

console.log(allSame);
