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


