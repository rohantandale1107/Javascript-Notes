// array

const arr=[ 1, 2, 3, 4, 5]
const heros =[" batman", "ironman"]

console.log(arr);   // to print whole array 
console.log(arr[3]);  // to print specific position element

// array methods

arr.push(6,7)      // add element in last
arr.pop()          // to delete last element

arr.unshift(9)     //  element added at first position
arr.shift()        // to delete first (unshift element) element 

console.log(arr.includes(5));   // check whether elemnt present or not -> true or false
console.log(arr.indexOf(4));    // check index of element


const newArr = arr.join()      // .join convert array elemnt in "string"

console.log(arr);
console.log(newArr);
console.log(typeof newArr);   //-> string


// slice & splice

console.log("A ", arr);

const newArr1 = arr.slice(1, 3)

console.log(newArr1);
console.log("B ", arr);

const newArr2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(newArr2);

//  * slice returns a piece of the array but it doesn't affect the original array.
//  *  splice changes the original array by removing, replacing, or adding values and returns the affected values.