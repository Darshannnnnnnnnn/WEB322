/*Name: Darshan Kalpeshbhai Prajapati
Section: NBB
date: 23rd May 2024
st Id: 112908215
email: dkprajapati2@myseneca.ca*/

//1.Write a JavaScript function using Object Literal Notation to create a 'Car' object, with properties.
//2.Method Implementation with this: Implement a method in the 'Car' object that uses "this".

//ANS 1-2
const Car = {
    Company: 'Honda',
    model: 'Civic',
    year: 2023,
    
    display: function(){
        console.log(`I Drive ${this.Company} ${this.model}`)
    }
}

//3.Class and Constructor: Create a 'Rectangle' Class with constructor and methods.
//4.Private Properties and Accessors: Add private properties with getters and setters in 'Rectangle'.

//ANS 3-4
class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
  
    get width() {
        return this.#width;
    }
     get height() {
        return this.#height;
    }
    
    set width(value) {
        if (value > 0) {
            this.#width = value;
        } else {
            throw new Error('Width must be positive');
        }
    }
    set height(value) {
        if (value > 0) {
            this.#height = value;
        } else {
            throw new Error('Height must be positive');
        }
    }
    
    getArea() {
        return this.#width * this.#height;
    }    
    getPerimeter() {
        return 2 * (this.#width + this.#height);
    }
}

//5.Iterate over an array of your choice, using for...of.
//ANS-5
const num1 = [1,2,3,4,5,6,7,8,9,0];

for(const number of num){
    console.log(number)
}


//6.Double each number in an array with forEach().
//ANS-6
const number = [1,2,3,4,5,6,7,8,9,0];
const doubled =[];

num2.forEach(num =>{
    doubled.push(num*2);
});


//7.Extract the first two elements of an array.
//ANS-7
const numbers =[1,2,3,4,5,6,7,8,9];
const[first,second]=numbers;

//8.Write an arrow function for summing two parameters.
//ANS-8
const sum = (a,b) => a+b;

//9.Create a greeting message function using template literals.
//ANS-9
const great = (helloMessage) =>`Hey There, ${helloMessage}`; 

//10.Error Handling with try/catch: Implement error handling in a function.
//ANS-10
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}


//11.Custom Error Throwing: Throw a custom error for non-numeric arguments.
//ANS-11
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

//12.Combine two arrays using spread syntax.
//ANS-12
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];

//13.Swap first and last elements of an array.
//ANS-13
const array = [1, 2, 3, 4, 5];
[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

//14.Merge two objects into one object.
//ANS-14
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };

//15.Perform calculations inside a template literal.
//ANS-15
const a = 5;
const b = 10;

const message = `The sum of ${a} and ${b} is ${a + b}.`;

//16.Create a JavaScript function that uses closures to encapsulate and protect a private variable within an object, allowing it to be accessed only through a specific method.
//ANS-16
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

