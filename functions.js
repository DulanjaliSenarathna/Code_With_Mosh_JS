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
console.log(sum1(1,2,9,6));//output 9 because first 2 argument only used
