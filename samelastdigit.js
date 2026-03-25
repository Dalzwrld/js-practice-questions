//Similar last digit between three numbers

let x = 25;
let y = 35;
let z = 45;

let lastX = x % 10;
let lastY = y % 10;
let lastZ = z % 10;

if (lastX === lastY && lastX === lastZ) {
    console.log("x, y and z have the same last digit");       
} else {
    console.log("x, y and z have different last digits");
}