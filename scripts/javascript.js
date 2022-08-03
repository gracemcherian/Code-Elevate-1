// This is a comment
/*multi-line
comment*/

//declare
var myName;

var MYVAR;
var myvar;
var MyVar;
//camel case
var myVar;
//no spaces and can't start with a number

var a;
a=47;
console.log(a);
console.log("this is a");

var b;
b=a;
console.log("b is equal to "+b)

//assignment operator
var c=0;

//string
var myFirstName="Grace";
var myLastName="Cherian";
var num="12";

/*undefined, declared ut not defined
var number;
defined
var number = "code";
*/

var x=4;
var y=10;
var z="I am a";

x=x+1
y=y+5
z=z+ " coder";

console.log(x);
console.log(y);
console.log(z);

// var will take the later defined portion if two
var camper= "Sheetal";
var camper= "Asher";
console.log(camper);

//let will only take one defined, so if two it will create error but remove let and i works
let student="Sheetal";
//let student="Asher";
student="Grace";
console.log(student);

//Constant variable can not be two, capitals
const FAV_PET="Cats";
//FAV_PET="Dogs";
//FAV_PET="Fish";

//can do math equations in constant
const SUM=10+10;
const DIFFERENCE=45-20;
const QUOTIENT=66/33;
const PRODUCT=8*10;
console.log(SUM);
console.log(DIFFERENCE);
console.log(QUOTIENT);
console.log(PRODUCT);

let newVar=47;
/*newVar=newVar+1;
equivalent to...*/
newVar++;
console.log(newVar);

newVar=newVar-1


let v=1;
v+=5;
console.log("this is v: " +v);

let s = 10;
s-=5;
console.log("this is s: " +s);

let m=5;
m*=2;
console.log("this is m: " +m);

let d=10;
d/=2;
console.log("this is d:" +d)

/*
// == is to check if it is really equal
//if statement: when true, it will print both
var n=24
if (n == 22) {
    console.log("This number is 22");
}
console.log("This number is not 22");

//if else statement: only prints one
if (n==23) {
    console.log("This number is 23");
} else {
    console.log("This number is not 23");
}

//else if statement
if(n==22){
    console.log("This number is 22");
} else if (n==23) {
    console.log ("This number is 23");
} else {
    console.log("This number is neither 22 or 23");
}
*/

// 2 amper signs (&&) means also but 2 || means or
var n=23
if(n==22 || n==23) {
    console.log("n is 22 or 23");
} else {
    console.log("n is neither 22 or 23");
}

//=== means strict check; 47 is equal to a string since its in quotes, not a number like in the condition, so it doesn't count
var number="47";
if (number===47) {
    console.log ("checked: this number is 47");
} else {
    console.log("checked: this number isn't 47");
}
number++;
number++;
number--;
console.log(number);

//concatenation of strings
console.log("number = " +number);
console.log("number is " +number + ".This number is prime");

// greater than or equal to: >= or less than or equal to: <=
var numCheck=20;
if (number<=10) {
    confirmlog("num is less than or equal to 10");
}else if (number>=11){
    console.log("num is greater than or equal to 11");
} else {
    console.log("this is not a number");
}

const PET="dog";
if (PET === "lizard") {
    console.log ("I own a lizard");
} else if (PET === "dog") {
    console.log ("I own a dog");
} else if (PET === "cat") {
    console.log ("I own a cat");
} else if (PET === "snake") {
    console.log ("I own a snake");
} else if (PET === "bunny") {
    console.log ("I own a bunny");
}else if (PET === "fish") {
    console.log ("I own a fish");
} else {
    console.log ("I don't own a pet");
}

//swtich statements are  more organized and easier to type is the same as ===
switch(PET) {
    case "lizard":
        console.log("I own a lizard");
        break;
    case "dog":
        console.log("I own a dog");
        break;
    case  "cat":
        console.log("I own a cat");
        break;
    case "snake":
        console.log("I own a snake");
        break;
    case "bunny":
        console.log("I own a bunny");
        break;
    case "fish":
        console.log("I own a bunny");
        break;
    default:
        console.log("I don't own a pet");
        break;
}

const COUNTRY="Ireland";
switch(COUNTRY){
    //grouping cases
    case"France":
    case"Spain":
    case "Ireland":
    case "Poland":
        console.log("This country is in Europe");
        break;
    case"United States":
        console.log("This country in in N. America")
        break;
    default:
        console.log("This country is not in N. America or Europe");
        break;
}

const ERRAND = "Going Shopping"
//using curly braces to define let message multiple times = having a block scope
switch (ERRAND) {
    case "Going to the Dentist": {
        let message = "I hate going to the dentist";
        console.log(message);
        break;
    }
    case "Going Shopping": {
        let message = "I love to shop!";
        console.log(message);
        break;
    }
    case "Chores": {
        let message = "I hate doing chores";
        console.log(message);
        break;
    }
    default: {
        let message="No Errands"    
        console.log (message);
        break;
    }
}

/*structure of a function
function myFunction() {
    //whatever code
}
*/

//pop-up boxes : alert, confirm, or prompt
function myFunction() {
    //console.log(ERRAND);
    //alert("I am an alert box"); alert only lets you click okay
    /* confirm lets you click okay or cancel
    var txt;
    if (confirm("Press a button")){
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    */
   //Prompts asks user to enter data and also gives ok or cancel
   let text;
   let person = prompt("Please enter your name", "Harry potter");
   if (person == null || person == "") {
       text = "User cancelled the prompt";
   } else {
       text = "Hello " + person +"! How are you today?";
   }
   document.getElementById("demo").innerHTML = text;
}

//while loop
var i = 0;
console.log("Sarting Loop");
while (i < 5) {
    console.log("The number is " + i);
    i++;
}
console.log("End of Loop");


//do while loop
var i = 5;
console.log("Starting Loop");
do {
    console.log("The number is " + i);
    i--;
} while (i > 0);

//for loop
var count;
console.log("Starting Loop");
for(count = 0; count < 10; count++) {
    console.log("Current Count: " + count);
}
console.log("Loop has stopped!");

// [] mean array, arrays make listing strings easier
var fruits = ["apple", "strawberry", "pineapple", "starfruit", "mango", "peaches", "passionfruit", "banana"];
// first item is index 0
console.log(fruits[0] + " is the first fruit")
console.log(fruits[1] + " is the second fruit");
console.log(fruits[2] + " is the third fruit")

var i;
for (i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let text = "<ul>";
fruits.forEach(FruitFunction);
text += "</ul>";
document.getElementById("fruitText").innerHTML = text;

function FruitFunction(value) {
    text += "<li>" + value + "</li>";
}

let counterHTML = document.getElementById("counterId");
console.log(counterHTML);
let totalCount = 0;
function increaseCount() {
    totalCount += 1;
    counterHTML.textContent = totalCount;
}

function decreaseCount() {
    totalCount -= 1;
    counterHTML.textContent = totalCount;
}

function resetCount() {
    totalCount = 0;
    counterHTML.textContent = totalCount
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    if (color=="white") {
        document.body.style.color = "black";
    }
    if (color=="black") {
        document.body.style.color = "white";
    }
}
let result = document.getElementById("result")
console.log(result);
let counter = "";
let w=0;
function sequenceNumbers() {
    let number = document.getElementById("numberId").value;

    let increase = document.getElementById("increaseId").value;

    let max = parseInt(increase) +parseInt(number) + 1;

    for(w = ++number; w < max; w++) {
        counter +=w;
        counter += " ";
    }
    result.textContent = counter
}