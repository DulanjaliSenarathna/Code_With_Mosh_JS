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

write(); //getting error , because we can't call method in function expression before it declared

const write = function(){
    console.log('write');
};

console.log(x); //also getting error because this is expression.
let x = 4;