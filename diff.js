//3. Difference between a number and 13, if the number is >13, return double the absolute difference.

let num = 12;
let result; 

if (num > 13) {
    result = (num -13)*2;
} else {
    result = 13 - num;
}

console.log(result);