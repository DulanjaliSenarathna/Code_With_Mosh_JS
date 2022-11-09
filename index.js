console.log('Hello');

let name = "Dul";
console.log(name);

//can't start with a number
//souldn't be include spaces or - 
//should be meaningfull
//can't be a reserved keywords
//case sensitive

let firstName = "Dula";
let secName = "Dil";

const interestRate = 5.0;
//interestRate = 1; //can't be assign again, because the variable is constant.
console.log(interestRate);

//premitive data types
let lastName = "Senarathna"; //string literal
let age = 25; //number literal
let isTrue = true; //boolean literal
let cityName; //undefined (default) 
let address = undefined; //undefined
let phone = null; //null


//objects
let person = {
    name: 'Dul',
    age: 25
};

//dot notation
person.name = "Dil";

//bracket notation
//person['name']="Sena";
let selection = 'name';
person[selection]='Mary';


console.log(person.name);

//arrays
let selectedColors = ['blue','green','red'];

//can be change the array length later
selectedColors[3] = '3'; //can be change the type of an object in the array

console.log(selectedColors[3]);

//functions - perfoming a task
function geet(pname, lname){
    console.log('Hello '+ pname + " "+lname);
}

geet("Dula","Sena");
geet("Dil","Ige");

//funtion - calculate the value
function square(numb){
    return numb*numb;
}

console.log(square(2));

//arithmetic operators
let x = 10;
let y = 20;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y); //10, 20 power

//increment++
console.log(x++);
console.log(x);

//decrment--
console.log(x--);

//Assignment operators
x = x+5;
console.log(x);
x += 5;
console.log(x);

x = x-2 ;
console.log(x);
x -= 2;
console.log(x);

//comparison operators

//relational
console.log(x>1);
console.log(x>=1);
console.log(x<1);
console.log(x<=1);

//equality
console.log(x===1);
console.log(x !==1);

//strict equality(type+value)
console.log(1===1); //equal
console.log('1' === 1 ); //not equal

//lose equality(value)
console.log(1==1);
console.log('1'==1); //right side type automatically covert to left side type and then compare 
console.log(true ==1);

//Ternary Operator
let point = 110;
let type = point>100 ? 'gold' : 'silver';
console.log(type);

//Logical Operators

//AND && - should both operand are true
console.log(true && true);

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//OR || - one of the operand is true
let highIncome2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore;
console.log('Approved ',eligibleForLoan);

//NOT ! 
let applicationRefuse = !eligibleForLoan;
console.log('Refuse',applicationRefuse);

//Logical Operators with Non-booleans
//Falsy (false)
//1. undefined
//2. null
//3. 0
//4. false
//5. ''
//6. NaN

//Anything that is not falsy => Truthy

//false|| 2 => 2

//short - circuiting = false || 'Dul' || 'Dil' => Dul (Checked first true value is answer. ignore all things after this.)

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
//if ther userColor = undefined, then currentColor = blue;

//Bitwise Operators
// 0 = 00000000
// 1 = 00000001
// 2 = 00000010
// r = 00000011 //OR (r=result)
// r = 00000000

//read write execute
// 00000100  - Read only
// 00000110  - Read and Write
// 00000111  - Read write and execute

console.log(1|2); //Bitwise OR
console.log(1&2); //Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes':'no';
console.log(message);




