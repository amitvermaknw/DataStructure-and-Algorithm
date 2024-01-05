//Object to array
const makeArr = (x) => {
    let data = [];
    let key = Object.keys(x);
    console.log("key", key)
    for (var item of key) {
        data.push(x[item]);
    }
    return data;
}

let x = {
    a: 1,
    b: 2
}
console.log(makeArr(x));

//Object cascading 

//Return this will return the whole function and chain call will work obj.getA().getB() will work
const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
    }
};

console.log(obj.getA().getB());

//[1,2].print(); //1,2
Array.prototype.print = function () {
    let out = this.toString();
    return out;
}
let a = [2, 4, 3].print()


//Need to check this 
const a1 = function (x) {
    this.x = x;
}

a.prototype = {
    getX() {
        return this.x
    }
}
const b = function (x, y) {
    this.y = y;
    a.call(this, x);
}

b.prototype = {
    getY() {
        return this.y
    }
}

const test = new b('xval', 'yval');
console.log(test.getX())
console.log(test.getY())

//merge two array 
const a = [1, 2, 3]
const b = [2, 5, 7]
console.log([...a, ...b].sort())

// wants to print x value which is 1.
const obj3 = {
    x: 1,
    getX() {
        const inner = function () {
            console.log(this.x) //print undefined
        }
        inner();
    }
}
obj.getX()

//Solution 1
const obj1 = {
    x: 1,
    getX() {
        const inner = () => {
            console.log(this.x)
        }
        inner();
    }
}
obj.getX();

//Solution 2
const obj2 = {
    x: 1,
    getX() {
        const inner = function () {
            console.log(this.x)
        }
        inner.call(this);
    }
}
obj.getX();

//Adding array value
let arr = [1, 2, 5, 7];
const sum = arr.reduce((a, b) => a + b);
console.log(sum);

//ary is unsorted from 1 to 100 and missing 1 number. How do I find the missing number.
//Solution 1
function missing() {
    let arr = [9, 4, 6, 3, 2, 1, 7, 5];
    arr = arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = count + 1;
        if (count !== arr[i]) {
            return count;
        }
    }
}
console.log('Missing numner', missing())
//Solution 2
function missing() {
    let arr = [9, 4, 6, 3, 2, 1, 7, 5, 10];
    let total = 10 * (10 + 1) / 2   //n*(n+1)/2 for total 
    console.log('total=', total)
    let totalArr = arr.reduce((total, item) => total + item);
    console.log("totalArr", totalArr)
    return (total - totalArr)
}
console.log('Missing numner', missing())
    //Difference between these two function and what is function expression - need to read 
    (function x() {
    })
function x() { //this is declaration
}
let y = function () { //this is statement
}
//if x is passed to function y then it become expression

//Debounce concept in javascript
//< button id = "myBtn" > click me</button>
const debounce = (fn, delayed) => {
    let funTimeoutId;
    return function (...arg) {
        if (funTimeoutId) {
            clearTimeout(funTimeoutId);
        }
        funTimeoutId = setTimeout(() => {
            fn(...arg)
        }, delayed)
    }
}
document.getElementById("myBtn").addEventListener("click", debounce(() => {
    console.log("clicked me")
}, 2000))

//null type is object and undefine type is undefined.
//If we declare variable javascript assign value undefined auto

'use strict';
this.table = 'windows table';
const cleanTable = function (soap) {
    console.log(`cleaning ${this.table} using ${soap}`);
};
this.garage = {
    table: 'garage table'
};
let johnsRoom = {
    table: 'john table'
};
cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsRoom, ' some soap');

//create constructor using function 
let createRoom = function (name) {
    this.table = `${name}'s table`;
};

createRoom.prototype.cleanTable = function (soap) {
    console.log(soap);
}
const jillsRoom = new createRoom('jills');
const johnsRoom1 = new createRoom('Johns')

//call method in javascript - you can borrow method for the functions
const argToArray = function () {
    console.log([].slice.call(arguments)); //output [1,2,3]
};
argToArray(1, 2, 3);

//Apply - takes array as argument
let numArray = [1, 2, 3] //find minimum.
console.log(Math.min(1, 2, 3));
Math.min.apply(null, numArray) // output is 1

//Bind - bind function to the object

let button = function (content) {
    this.content = content;
}
button.prototype.click = function () {
    console.log(this.content)
}
let newButton = new button('add');
let boundButton = newButton.button.bind(newButton);
boundButton();

let myObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log('parse cakked');
    },
    render() {
        this.asyncGet(function () {
            this.parse
        }.bind(this));
    }
};
myObj.render();

//Reverse the whole sentances
let str = 'i love javaScript';
const data = str.split(' ').map(item => {
    return item.split('').reverse().join('');
}).reverse().join(' ');
console.log(data);  // tpircSavaj evol i

//OR
console.log(str.split('').reverse().join('')) // tpircSavaj evol i

//max and min from array if remove one by one number and add the numbers
const ary = [1, 2, 3, 4];
let minNumber = Math.min.apply(null, ary); //Get the minimum value
let maxNumber1 = Math.max.apply(null, ary); //Get the max value
let arrSum = ary.reduce((t, n) => t + n);
return {
    max: arrSum - minNumber,
    min: arrsum - maxNumber1
};

//Length of number, without converting to string
function findLengthOfNumber(x) {
    let counter = 0;
    while (x > 0) {
        x = Math.floor(x / 10);
        counter++
    }
    return counter;
}
console.log(findLengthOfNumber(1234));

//OR another solution 
function findLengthOfNumberSecond(x) {
    return Math.floor(Math.log10(x)) + 1;
}

//Access this inside the object 
const profile = {
    name: 'test',
    nameFun: function () {
        that = this;
        getName = () => {
            console.log(that.name)
        }
        getName()
    }
};
profile.nameFun();

//Count of max number in array
let x = [1, 2, 2, 4, 2, 4];
const maxNumber = Math.max.apply(null, x);
//or maxNumber = Math.max(...x);
let countMax = 0;
for (let a of x) {
    if (a === maxNumber) countMax++
}
console.log(countMax)

// Output of the method 
const arr1 = [5, 120, 15, 21];
for (let i = 0; i < arr1.length; i++) {
    setTimeout(() => {
        console.log(`Index: ${i}, element: ${arr1[i]}`);
    }, arr1[i])
}
/**
 * output
 * Index: 0, element 5
 * Index: 2, element 15
 * Index: 3, element 21
 * Index: 1, element 120
 */

//convert AM/PM to 24 hours
let time = '12:03 AM'
const [timeStr, identifier] = time.split(' ');
let [hour, min] = timeStr.split(':');
let modHour;
if (hour === '12') {
    hour = '00'
}
if (identifier === 'PM') {
    modHour = parseInt(hour) + 12;
}
else {
    modHour = hour
}
console.log(`${modHour}:${min}`);

//Convert to binay or hex 
const num = 42;
// Convert to Hex
const hex = num.toString(16);
console.log(hex); // "2a"
// Parse back to number
const parsed = parseInt(hex, 16);
console.log(parsed); // 42
// Use parenthesis when calling toString directly
const hex2 = (42).toString(16);
console.log(hex2); // "2a"

//fibonacci series

let cache = {};
const fibonacci = n => {
    if (n <= 1) {
        return n;
    }

    if (cache[n]) {
        return cache[n];
    }

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
};
fibonacci(5)
console.log('cache=', cache)

//Prime number 
function primeNumber(number) {

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    } else {
        console.log("The number is not a prime number.");
    }
}

//use strict 
//https://www.programiz.com/javascript/use-strict

/*call, apply, bind
call: binds the this value, invokes the function, and allows you to pass a list of arguments.

apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.
*/
function test(arg) {
    console.log(this.name, arg);
}
const newFun = test.bind({ name: 'test' }, 2);
newFun();


function testApply(...arg) {
    console.log(this.name, ...arg);
}

testApply.apply({ name: 'apply' }, [1, 2, 3]);


function testCall(arg1, arg2) {
    console.log(this.name, arg1, arg2);
}

testCall.call({ name: 'call' }, 3, 4)

/**
 * currying
Currying is a transformation of functions that translates a function from callable as f(a, b, c) 
into callable as f(a)(b)(c).
Currying doesn’t call a function. It just transforms it.
 */

function currying(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b)
        }
    }
}

function sum(a, b) {
    return a + b;
}

const curr = currying(sum)
curr(1)(2);