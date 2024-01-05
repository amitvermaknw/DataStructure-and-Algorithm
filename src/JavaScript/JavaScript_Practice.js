//Confirm the ending
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-confirm-the-ending/16006

//Find the longest word
const longestWord = (str) => {
    let wordArr = str.split(' ');
    wordArr.sort((a, b) => a.length - b.length);
    return wordArr[wordArr.length - 1]
};

longestWord("What if we try a super-long word such as otorhinolaryngology");

//Factorial -

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);

//Return an array consisting of the largest number from each provided sub - array.For simplicity, the provided array will contain exactly 4 sub - arrays.
function largestOfFour(arr) {

    let result = arr.map((res) => {
        res.sort((a, b) => a - b);
        return res[res.length - 1]
    });
    return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Check if a string(first argument, str) ends with the given target string(second argument, target).
//This challenge can be solved with the.endsWith() method, which was introduced in ES2015.
function confirmEnding(str, target) {
    const data = str.slice(str.length - target.length) === target
    return data;
}
confirmEnding("Bastian", "n");

//First duplicate in array
const findDupli = (arr) => {
    if (!Array.isArray(arr)) return "not a valid array";
    let newArr = new Set();

    for (var num of arr) {
        if (newArr.has(num)) {
            return num
        }
        newArr.add(num)
    }
}

console.log(findDupli([2, 3, 5, 4, 2]))


//Remove Palindromic Subsequences
var removePalindromeSub = function (s) {
    const sRevert = s.split('').reverse().join('');
    if (s === sRevert) return 1

    return 2
};

//You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
//Return the number of strings in words that are a prefix of s.

var countPrefixes = function (words, s) {
    let count = 0;
    if (words.length) {
        for (var item of words) {
            if (s.startsWith(item)) {
                count++
            }
        }

        return count;
    }
};

var a = ['a', 'c', 'd', 'r', 'h'];
a[100] = 'i';
console.log(a) // [ 'a', 'c', 'd', 'r', 'h', <95 empty items>, 'i' ]
console.log(a.length) //101
//===============================

var thing;
let func = (str = 'no arg') => {
    console.log(str)
};
func(thing);
func(null)

//output = no arg 
// null

var pokedex = ['snorlax', 'jigglypuff', 'charmander', 'squirtle'];
pokedex.pop();
console.log(pokedex.pop())  //charmander
//--------------------------
function printA() {
    console.log(answer);
    var answer = 1;
};
printA(); //undefined
printA(); //undefined

//There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.
//The var keyword behaves differently in function scopes and block scopes.

//Add Two digit

var counter = 0;
function addDigit(n) {
    if (n === 0) {
        console.log(counter)
    }
    counter = counter + Math.floor(n % 10);
    n = Math.floor(n / 10);
    addDigit(n)
}

addDigit(123);

//Larget integer in array with positive and negative
function findMax(arr) {
    let maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((Math.abs(arr[i]) > maxVal) && (arr.indexOf(-arr[i]) !== -1)) {
            maxVal = arr[i];
        }
    }

    return maxVal;
}

// Driver Code
let arr = [3, 2, -2, 5, -3];
console.log(findMax(arr));

//Implement map method
Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }
    return arr;
}
let a = [2, 4, 3].myMap(item => item * 4)
console.log("a=", a);

//filter method implementation
Array.prototype.myFilter = function (callback) {
    let item = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === this[i]) {
            item.push(this[i]);
        }
    }
    return item;
}
let a = [2, 4, 3].myFilter(item => item === 2 ? item : null);
console.log("a=", a);

//Reduce method
Array.prototype.myReduce = function (callback) {
    let item = 0;
    for (let i = 0; i < this.length; i++) {
        item = callback(item, this[i]);
    }
    return item;
}
let a = [2, 4, 3].myReduce((total, a) => total + a);
console.log("a=", a);

//memoization
function memoizedAddTo256() {
    var cache = {};
    return function (num) {
        if (num in cache) {
            console.log("cached value");
            return cache[num]
        }
        else {
            cache[num] = num + 256;
            return cache[num];
        }
    }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

//Pollyfil of bind method 
Function.prototype.mybind = function (context, ...args1) {
    let fn = this;
    return function (...arg2) {
        return fn.apply(context, [...args1, ...arg2])
    }
};

