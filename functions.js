// .map() -- It will give a new array based on the existing array if you provide the computational logic

// let array =  [1,2,3,4,5];
// let newArray = [];
// for (let i =0; i < array.length; i++) {
//     newArray [i] = array[i] * array[i];
// }
// console.log(newArray);

let array =  [1,2,3,4,5];

function functionForMap(element) { //element = array[i]
    return element*element;
}

let newArray = array.map(functionForMap);
console.log(newArray);

// in JS, a function is also a JS Object

// .forEach(()

let array1 = [1,2,3,4,5];
array1.forEach((element, index) => {
    element *= element;
    console.log(element);
});

console.log("Array is : ", array1);

// .filter() 

let array2 = [10,20,30,40,50];
let newArray1 = array2.filter((element) => element >= 30);
console.log(newArray1);


// .find()
let array3 = [10,20,30,40,50,60];
let temp = array3.find((value) => {
    return value > 20;
});
console.log(temp);

// .sort()

let array4 = [100,56,151,61,6,12];
let sortedArray = array.sort();
console.log(sortedArray);