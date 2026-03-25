//The largest integer between three numbers

let x = 10;
let y = 20;
let z = 30;

if (x >= y && x >= z) {
    console.log("Largest number is" + "" + x);
} else if (y >= x && y >= z){
    console.log("Largest number is" + "" + y);
} else {
    console.log("Largest number is" + "" + z);
}