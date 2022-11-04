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