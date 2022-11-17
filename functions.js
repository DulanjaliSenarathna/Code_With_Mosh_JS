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