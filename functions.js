//function declaration

function walk(){
    console.log('walk');
}

//anonymous function expression (function doesn't have name)

const run = function(){
console.log('run');
};

let move = run;

run();
move();

//named function expression (function does have name)

const bring = function catchi(){
    console.log('cachi');
}

bring();

//Hoisting
sleep(); // output 'sleep' because of the hoisting. 

function sleep(){
    console.log('sleep');
}

//write(); //getting error , because we can't call method in function expression before it declared

const write = function(){
    console.log('write');
};

//console.log(x); //also getting error because this is expression.
let x = 4;

//Arguments
function sum(a,b){
    console.log(arguments); //arguments is a object
    return a+b;
    
}

console.log(sum(1,3));
console.log(sum(1)); //when we passing 1 argument output is 'NaN' because b is not declared and by default not declared varible is undefined.
//1+undefined = NaN
console.log(sum()); // undefined + undefined = NaN
console.log(sum(1,8,9,6));//output 9 because first 2 argument only used

//find the sum of all arguments which are passing 

 function sum1(){ //we can remove a and be because they aren't using here
  let total = 0;
  for(let value of arguments){
    total +=value;
  }
  return total;
}
console.log(sum1(1,2,9,6));

//The Rest Operator
function sum2(...args){ // ... = rest operator => take all arguments and put them in an array. without rest operator, output will be 5 (because function get first value)
    console.log(args);
}

sum2(5,7,6,9); //output => [5,7,6,9]

//calculate sum of arguments using rest operator and reduce method
function sum4(...args1){ return args1.reduce((a, b) => a+b);}

console.log(sum4(5,7,6,9));

//modify above to shopping cart implimentation

function sumCart(discount, ...prices){ // we can't add parameters after the rest parameter (rest = rest of the parameters)
    const total = prices.reduce((a,b)=> a+b);
    return total * (1-discount);
}

console.log(sumCart(0.1,20,30));

//Default Parameters

function interest(principal, rate, years){
    return principal*rate / 100*years;
}

console.log(interest(1000,0.2,5));

//same function above without parsing default parameters
function interest1(principal, rate, years){
     rate = rate || 0.2; //set default value if not function passing parameter
     years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest1(10000));

//same function above with parsing default values as function parameters
function interest2(principal, rate=0.2, years=5){
   return principal * rate / 100 * years;
}

console.log(interest2(10000));

function interest3(principal, rate=0.2, years){ //if we want to give default value only one , then we need to pass the value for other parameter when function calling
    return principal * rate / 100 * years;
 }
 
 console.log(interest3(10000, undefined, 5)); //in here we need to set undefined to default parameter, if not output will 'NaN'
//but this is ugly, best practise is the write default parameters last. => function interest3(principal, years, rate=0.2) like this and no need to add undefined to when calling method

//Getters and Setters

const person ={
    firstName : 'Dulanjali',
    lastName : 'Senarathna',
    get FullName (){
        return `${this.firstName} ${this.lastName}`
    } ,
    set FullName(value){
        if(typeof value !== 'string') return;
        const parts = value.split(' '); //convert string into array and keep blank between 2 elements
        this.firstName = parts[0],
        this.lastName = parts[1]
    }
}

person.FullName = "Nisitha Athukorala"; //if we try to person.FullName = true, then output is error, because split is a string method and we can't use other types
console.log(person);

//Try and Catch
const movie ={
    fName : 'Anjan',
    lName : 'Pathira',
    get FullMovieName (){
        return `${this.fName} ${this.lName}`
    } ,
    set FullMovieName(value){
        if(typeof value !== 'string'){
            throw new Error('Value is not a string'); //create error msg if value isn't a string
        }
        const parts = value.split(' ');

        if(parts.length !==2){
            throw new Error('Enter a first and last names');  //create error msg if user doesn't enter fist name or last name or both
        }
        this.fName = parts[0],
        this.lName = parts[1]
    }
}

try{ //where the error reason
    movie.FullMovieName = '';
}catch(e){ //display error to the user, usually use labels
    alert(e);
}

console.log(movie);

//Local vs Global Scope
const color = 'red'; //globally declared - accessibale anywhere 

function start(){
    const message = 'hi';
    const color = 'blue'; 
    console.log(color);   
}

start();//output blue.
//console.log(message);//can't access message constant outside of the scope

//Let vs Var
function start1(){
    for(let i=0; i<5; i++){
        console.log(i);
    }

   // console.log(i);//unaccessible outside of the scopeof i when i declared as 'let'. but if i declared as var, i accessible in here
}

// console.log(i); // even though i declared as var , can't accessible in here

//var => function scoped, attached variable to window object => var color = 'red'; and now in console => window.color => output red
//let => block scoped , not attached variable to window object

start1();

//The this Keyword

//method => object itself
//function => global object (window object in browser and global in node)

//this keyword in method
const video = {
    title : 'a',
    play(){
        console.log(this);
    }
}

video.play();

//this keyword in function
function playVideo(){
    console.log(this); 
}

playVideo(); //output => window object (default)

//in Video constructor

function Video(title){
this.title = title;
console.log(this);
}

const v = new Video('titlee');//if call a function using a new operator, (in this case constructor function)'this' will reference a new empty object

const video1 = {
    title : 'a',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title , tag);
        } ,this);//without here this, output returns window object, because the callback function of the foreach method, is normal function, not a method inside a method
        //this refers video object
    }
}

video1.showTags();

//Way 1 - remove 'this' argument from forEach method (don't use)
const video2 = {
    title : 'a',
    tags : ['a','b','c'],
    
    showTags(){
        const self = this;
        this.tags.forEach(function(tag){
            console.log(selt.title , tag);
        } );
    }
}

video1.showTags();

//normal function to check call, apply and bind methods
function playSong(a,b){
    console.log(this);
}

playSong();// output window object

playSong.call({name: 'Dul'},4,6);//output object that inside the paranthesis. Also we can pass multiple arguments if we need
playSong.apply({name: 'Dul'},[1,2]);//same as above, but difference is we need to pass arguments as an array
playSong.bind({name:'Dul'})(); //doesn't call playSong function, but returns new function and point to this object permently 

//Way -2 using bind method

const video3 = {
    title : 'a',
    tags : ['a','b','c'],
    
    showTags(){
        
        this.tags.forEach(function(tag){
            console.log(this.title , tag);
        } .bind(this)); // in here this is refence to video3 object.
    }
}

video1.showTags();

//Way -3 using arrow function's inheritance

const video4 = {
    title : 'a',
    tags : ['a','b','c'],
    
    showTags(){
        
        this.tags.forEach(tag=>{ //arrow functions inherit 'this' from the containing function
            console.log(this.title , tag);
        }); // in here this is refence to video3 object.
    }
}

video1.showTags();

//Exercise 1- Sum of Arguments

function sumOfArgs(...items){
    return items.reduce((a,b)=>a+b);
}

console.log(sumOfArgs(4,8,6));

//if arguments passing as array

function sumOfArgs1(...items){

if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a,b)=>a+b);
}

console.log(sumOfArgs1([5,7,9]));




