console.log("Hello World!, welcome to JS Review"); //for printing the info in the quotation marks

//alert("Welcome to JS Review")  //for notification pop-ups

const firstname = "Raphael";
const lastname = "Oresanwo";
let val = 34;
const fullname = firstname+" "+lastname;
console.log("My fullname is "+fullname);

//Array Declaration
const arr = [
    "Raphael",
    34,
    true,
    null
]
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);


const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log("Explicit type: "+typeof(explicit));
console.log("Implicit type: "+typeof(implicit));

//we can also compare two values using the comparison operator
const a = 42;
const b = 22;
console.log(a == b);
console.log(a <= b);
let test = (a === '42');
console.log(test);

let age = 42;
let canDrive = age > 16 ? 'yes' : 'no';
console.log("Can I drive? "+canDrive);

let minimumAge = 18;
let myAge = 42;
// Check if the person is eligible to vote based on their age
if(myAge < minimumAge) {
    console.log("You are not eligible to vote")
}
else {
    console.log("Please do go ahead and cast your vote")
}

let quartile = 50;
// Determine the quartile based on the value of 'quartile' variable
switch(quartile) {
    case 25:
        console.log("First quartile");
        break;
    case 50:
        console.log("Second quartile");
        break;
    case 75:
        console.log("3rd Quartile");
        break;
    default:
        console.log("You are in the 4th quartile")
}

// For loop
// Loop through numbers 0 to 4 and print the index
for( let i = 0; i < 5; i++){
        console.log("My index is "+i)
}

// functions- by declaration

function addTwoNumbers(a, b) {
    return a + b;
}

// function by expression
const addtwoNumbers = function(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2,3));
console.log(addtwoNumbers(2,4));

const sum = (a,b) => a + b;
const log = (output) => console.log(output);
let result = sum(2,8)  //gives ?
log("My sum function result is::"+result);  //My sum function is  ?

// Template Literals
const name = "Afam Okonkwo";
age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
console.log(`my sum is ${sum(2,3)}`);



const courseTopic = "ES 6 Review"
const courseCode = "PAU-ISM 210"

console.log(`Hi, welcome to ${courseTopic}, you enrolled for ${courseCode}`);