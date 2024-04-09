//Object literal
let user = {
    name: 'Bob'
}

//Constructor
function User() {
    this.name = 'Bob';
}

var user1 = new User();
var user2 = new User();


//Object prototype
//Constructor
function User() {
    this.name = 'Bob';
}

let user1 = new User();
let user2 = new User();

//Adding property to constructor using prototype
User.prototype.age = 25;

console.log(user1.age); // 25
console.log(user2.age); // 25

//Built-in constructor
var a = new Object();

var b = new String();
var c = new String('Bob')

var d = new Number();
var e = new Number(25);

var f = new Boolean();
var g = new Boolean(true);

//Although these constructors exist, it is recommended to use primitive data types where possible, such as:
var a = 'Bob';
var b = 25;
var c = true;


