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
console.log(x**y); //10, 20 power (Exponentiation)

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

let s = (1 == true);
console.log(s);

//exercise - swap numbers
let a = 'red';
let b = 'blue';

let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//If else
//Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise : Good Evening!

let hour = 10;

if(hour>=6 && hour<12){
    console.log('Good morning!');
}
else if(hour>=12 && hour<18){
    console.log('Good afternoon!');
}
else{
    console.log('Good Evening!');
}

//Switch...case

let role = 'admin';

switch(role){
    case 'admin' :
        console.log("Admin");
        break;
    case 'moderator' :
        console.log('Moderator');
        break;
    default : 
        console.log('Other');
}

if (role === 'admin') console.log("Admin");
else if (role === 'moderator') console.log("Moderator");
else console.log("Other");

//for loop

for(let i=0; i<5 ; i++){
    console.log('Hello');
}
//odd numbers
for(let i=1; i<=5 ; i++){

    if(i%2 !==0) console.log(i);
}

//odd numbers - reverse order

for(let i=5; i>=1 ; i--){

    if(i%2 !==0) console.log(i);
}

//while

let i = 5;
while(i>=1){
    if(i%2 !==0) console.log(i);
    i--;
}

//do while

let j = 7;
do{
    if(j%2 !==0) console.log(j);
    j++;
} while(j<=5);

//infinite loop

//missing increment statement in for loop
// while (true){ }
// missing increment statement in do while loop
// for (let i=0; i>0 ; i++)

//for - in loop

//objects
const car = {
    numb:"g34",
    color:"green"
};

for (let k in car){
    console.log(k, car[k]);
}

//arrays

const vehicles = ['car','bus'];

for(let g in vehicles){
    console.log(g,vehicles[g]);
}

//for-of loop - iterates items in an array

for(let vehi of vehicles){
    console.log(vehi);
}

//break and continue
let z=0;
while(z<=10){
    if(z==5){
        break;
    }
    console.log(z);
    z++;
}

let g=0;
while(g<=10){
    if(g%2==0){
        g++;
        continue;
        
    }
    console.log(g);
    g++;
}

//Exercise 1 - Max of Two Numbers

function findMax(a,b){
   return (a>b)? a:b;
    
}
console.log(findMax(100,2));

//Exercise 2 - Landscape or Portrait
function isLandscape(width,height){
    return (width>height)  // no need - ? true:false; explicitly - automatic brackets return true or false
}

console.log(isLandscape(200,4));

// Exercise 3- FizzBuzz

//Divisable by 3 => Fizz
//Divisable by 5 => Buzz
//Divisable by both 3 and 5 => FizzBuzz
//Not Divisable by 3 or 5 => input
//Not a number => 'Not a number'

function fizzBuzz(num){
    if(typeof num !== 'number')
        return 'Not a Number';
    
    if ((num%3 ==0) && (num%5 ==0))
        return 'FizzBuzz';

    if (num%3 ==0)
        return 'Fizz';
    
    if(num%5 ==0)
        return 'Buzz';
    
    else
        return num;
}

console.log(fizzBuzz('bh'));

//Exercise 4- Demerit Points

//Speed should under 70 => Ok
// Every +5 => add 1 points (75 => 1, 80=>2,.. so on)
// Math.floor(1.3)
// 12 points - suspend

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed<=speedLimit+kmPerPoint){
        console.log('ok');
    }
    else{
        const points = Math.floor((speed - speedLimit)/ kmPerPoint);
        if(points>=12){
            console.log('Liscen Suspended');
        }
        else{
            console.log('points '+points);
        }
    }
}

checkSpeed(75);

//Exercise 5- Even and Odd Numbers

function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        if(i%2==0){
            console.log(i+' EVEN');
        } else{
            console.log(i+' ODD');
        }
    }
}

showNumbers(10);

//Exercise 6- Count Truthy

let array = [10,0,20,2,'mm',undefined,NaN];

function countTruthy(array){
    let count=0;
    for(let x of array){
        if(x){ //no need to check (x !== 0)&&(x !== false)&&(x !== '')&&(x!== NaN)&&(typeof(x)!== undefined)&&(typeof(x)!=='null') because if condition check value inside paranthesis true or false.
            count++;
        }   
    }
    console.log(count);
}

countTruthy(array);

//Exercise 7- String Properties

const movie = {
    nameM : 'Krish',
    year : 2004,
    director: 'Dil'
}

function showProperties(movie){
    for(let i in movie){
        if(typeof movie[i] === 'string'){
            console.log(i, movie[i]);
        }
        
    }
}

showProperties(movie);

//Exercise 8- Sum of Multiples of 3 and 5

let sum1 = 0;
let sum2 = 0;
function sum(limit){
    for(let i=0; i<=limit;i++){
    
        if(i%3==0){
            sum1 = sum1+i;
        }else if(i%5==0){
            sum2 = sum2+i;
        }
    }

    console.log(sum1+sum2);
}

sum(12);

//Exercise 8-Grade

const marks = [0,100,80];
var summ = 0;

function calculateGrade(){
    
    for(let i=0; i<marks.length;i++){
       
        summ = summ+marks[i];
        var avg = (summ/marks.length);  
    }
    let grade = '';
    if(avg<=59){
        grade = 'F';
    }
    else if(avg>=60 && avg<=69){
        grade = 'C';
    }
    else if(avg>=70 && avg<=79){
        grade = 'D';
    }
    else if(avg>=80 && avg<=89){
        grade = 'B';
    }
    else if(avg>=90 && avg<=100){
        grade = 'A';
    }
    return grade;
}

console.log((calculateGrade(marks)));

//Exercise 10- Stars

function showStars(rows){

    for(let i=1;i<=rows;i++){

        let pattern = '';

      for(let j=0; j<i;j++){

         pattern += '*';  
        }   
        console.log(pattern);
    }
}

showStars(5);

//Exercise- Prime Numbers
function showPrime(limit){

    for(let number=2; number<=limit; number++){  //i=2; because the 1st prime number is 2

        if(isPrime(number)){
            console.log(number);
        }
    }
   
}

function isPrime(number){
   
    for(let factor=2; factor<number;factor++){
        if(number%factor ==0){
            return false;
        }
    }
    return true;
}
showPrime(5);

//Object Basics

//OOP
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw1 : function(){
        console.log('draw');
    }
}

circle.draw1(); //Method (If the function is a part of a object , it's called a method)

//Factory Functions - use camel case naming convention
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('drawing');
        }
    }

}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(5);
console.log(circle2);

//Constructor Functions - use Pascal case naming convention

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('something');
    }
}

const circlee = new Circle(2);

