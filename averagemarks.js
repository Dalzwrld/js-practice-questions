console.log('Outputting in the console');

let students = [
    {name:"Jane", mark: 80},
    {name:"Ciara", mark: 77},
    {name:"Smith", mark: 88},
    {name:"Thomas", mark: 95},
    {name:"Shelby", mark: 68}
];

let total = 0;
for (let i = 0; i < students.length; i++) {
    total += students[i].mark;
}

let average = total / students.length;
console.log(average);

if (average < 60) {
    console.log("Grade: F");
} else if (average < 70) {
    console.log("Grade: D");
} else if (average < 80) {
    console.log("Grade: C");
} else if (average < 90) {
    console.log("Grade: B");
} else if (average <= 100) {
    console.log("Grade: A");
};

