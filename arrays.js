let cars = ['Mercedes','Volvo','Audi','Bugatti','Lamborghini'];
console.log({cars});

// Reassigned volvo with Tesla
cars[1]= 'Tesla';
console.log({cars});

// Adding elements at the back of the array
cars.push('Jeep');
console.log(cars);

// Adding elements at the end of the array
cars.unshift('Kia');
console.log(cars);

// Removing elements at the last
cars.pop();
console.log(cars);

// Removing at the end of the array
cars.shift();
console.log(cars);
 
// Negative indexing
console.log(cars.length -3);

// squareroot of all values in an array
const nums = [4,49,25,36,81,900,100];
const numbers = nums.map(Math.sqrt);
console.log(numbers);

// Multiply numbers with the 10
const values = nums.map(myFunction);
function myFunction(values){
    return values *10;
}
console.log(values);

// creating new arrays
const fruits = [];
fruits.push('Mango','Orange','Pineapple','Mango','Watermelon','Apple');
console.log(fruits);

// Indexing in arrays
const fruit = fruits.at(2);
const slice = fruits.at(-1);
console.log(fruit);
console.log(fruits[1]);
console.log(slice);

// Joining two arrays
console.log(fruits.concat(cars,nums));

// Copy from one index to another in the same array
fruits.copyWithin(0,2);
console.log(fruits);

// filtering for new array that passes a condition(s)
const age = [34,22,14,2,34,90,12,19,0,18]
const result = age.filter(checkAdult)

function checkAdult(age){
    return age >= 18;
}
console.log(result);