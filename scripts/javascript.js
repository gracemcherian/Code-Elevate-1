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

//let will only take one defined, so if two it will create error
let student="Sheetal";
//let student="Asher";
console.log(student);

//Constant vairable can not be two
const FAV_PET="Cats";
//FAV_PET="Dogs";

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
