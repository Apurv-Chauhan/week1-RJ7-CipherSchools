// Rest and Spread opreator
let array = [5,10,15,20,25];
//Spread 
let newArray = [...array];
console.log(newArray);

//Rest
let maxOfNumbers = (...numbers) => {
    let maximum = Number.MAX_VALUE;
    for(let number of numbers) {
        maximum = Math.max(maximum, number);
    }
    return maximum;
};
console.log(maxOfNumbers = (1,2,3,4,5,6,7));
