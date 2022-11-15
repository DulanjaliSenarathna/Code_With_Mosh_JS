const numbers = [3,4,1]; //const means cant re-declared numbers array, but can modify array 

//adding element to the end
numbers.push(5,6);

//adding element to the begininng
numbers.unshift(1,2);

//adding element to the middle
numbers.splice(2,0,'a','b'); //in here 2 = which is the index  to add new elements, 0 = how many elements should delete to add new elements, then elements that are adding 

console.log(numbers);

//Finding Elements (Primitives)

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(15)); //when try to find the number which are not in arry, always return -1
console.log(numbers.indexOf(1,2)) ;// in this 1 = the number which is we should find the index, 2 = search starting index
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));//simlest way to above 

//Finding Elements (Reference Types)

const courses = [
    {id : 1, cname: 'maths'},
    {id : 2, cname: 'commerce'}
]

//trying to use primitive element find method

console.log(courses.includes({id : 1, cname: 'maths'})); //output false because of the these two objects are different from each other. because object is reference type. and this 2 objects in diffrent memory locations

//correct way

const result1 = courses.find(function(course){
    return course.cname == 'maths';
});

console.log(result1); //return the complete course object

const result2 = courses.find(function(course){ //this function called 'predicure funtion'
    return course.cname == 'math';
});

console.log(result2); //return undefined when we try to serach element that are not in array

//return serched result's index

const result3= courses.findIndex(function(course){
    return course.cname == 'commerce';
});

console.log(result3); 

//Arrow function

const result4 = courses.find(course => course.cname == 'commerce');
console.log(result4);

//Removing Elements
const numbers1 = [3,4,2,4,6];

//remove last
const last = numbers1.pop();
console.log(numbers1);
console.log(last);

//remove first element
const first = numbers1.shift();
console.log(numbers1);
console.log(first);

//remove middle 
numbers1.splice(2,1); //in this 2 is the index of we want to delete, 1= how many numbers should be delete from this index
console.log(numbers1);

//Emptying an Array

let numb = [1,2,3,4,5,6,7]; // let use, because const don't let re-declared array
let another = numb;

//Way 1

numb = [];
//console.log(numb);//numb empty
console.log(another); //not empty and same to original numb array

//Way 2
numb.length = 0;
console.log(numb);

//Way 3 (bad effect on perfomance when millions of objects)
while(numb.length>0){
    numb.pop();
}
console.log(numb);

//Way 4 
numb.splice(0,numb.length);
console.log(numb);

//Combining and Slicing Arrays
const firsta = [1,2,3];
const sec = [4,5,6];

const combine = firsta.concat(sec);
console.log(combine);

//opposite of the concat is the 'slice'

const slice = combine.slice(2,4); //2 = after second(2) index and 4= after 4th index
console.log(slice);

const newarray = [1,5,6,8,3,4];

const sliceall = newarray.slice(2); //starting from given index.in here , index 2(include 2nd index)
console.log(sliceall);

const copy = newarray.slice(); //copy of the original array
console.log(copy);

//reference type

const obarray = [{id:1}];
const newa = [4,5,8];


const con = obarray.concat(newa);
obarray[0].id = 20;
console.log(con);

//The Spread Operator
const a = [1,2,3,4];
const b = [3,7,6,8];

const neww = [...a , ...b]; //combine two arrays 
console.log(neww);

const copy1 = [...neww];
console.log(copy1);

// Iterating an Array

const array = [1,8,6,5,7];

for(let num of array){ // we can't get indexes
    console.log(num);
}

array.forEach(function(num,index){ //we can get data and also and indexes
    console.log(index,num);
})




