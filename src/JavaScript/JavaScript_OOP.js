//Difference between fun and constructor
/// This is function
let add = function (n1, n2) {
    return n1 + n2
};
let sum = add(1, 2)

//constructor
//constructor will set the value for the function
let Car = function (color) {
    if (!new.target) throw 'Car() must be called with new'
    this.color = color;
    //here this is belongs to windows global
};
let redCar = new Car('red');
let BlueCar = Car('red');

//Define the private variable need to use getter and setter
let CarExample = function (_color) {
    this.setColor = function (color) {
        _color = color;
    }
    this.getColor = function () {
        return _color;
    }
};
let car = new CarExample('red');
console.log(car.getColor());


//Prototype
//Every constucture has the property as prototype and can add the methods
let CarProto = function (color) {
    if (!new.target) throw 'Car() must be called with new'
    this.color = color;
};

CarProto.prototype.getColor = function () {
    return this.color
}

Object.prototype.toString = function () {   //this is root side to modify the toString property.
    return `color: ${this.color}`;
}

let carProto = new CarProto('red');
console.log(carProto.toString());


//Prototype inheritance 
const myObject = Object.create(Object.prototype)

const CarInheri = function (color) { //Constructor
    this.color = color;
};
const car1 = new CarInheri('red');
const car2 = Object.create(CarInheri.prototype);

CarInheri.prototype = {
    getColor() {
        return this.color;
    }
};

const ToyCar = function () {
};

ToyCar.prototype = Object.create(CarInheri.prototype); //Inheritance
const legoCar = new ToyCar();

console.log(ToyCar.prototype.isPrototypeOf(legoCar)); //this should give true


//Prototype chain
const CarProtoChain = function () { };
CarProtoChain.prototype = {
    print() {
        return 'I am a car'
    }
};
const ToyCarChain = function () {
};

ToyCarChain.prototype = Object.create(CarProtoChain.prototype);
ToyCarChain.prototype.print = function () {
    return 'I am a toyCar';
};

const ToyTransformer = function () { };
ToyTransformer.prototype = Object.create(ToyCarChain.prototype);

ToyTransformer.prototype.print = function () {
    return 'I am a toyTransformer';
};

const toyota = new CarProtoChain();
const logoCar = new ToyCarChain();
const toyTransformer = new ToyTransformer();

//Extending constructors - Inheritance
//Base constructor from sub class 

let Mammal = function (legs) {
    this.legs = legs;
};

Mammal.prototype = {
    walk() {
        return 'walking';
    }, sleep() {
        return 'sleeping'
    }
};

let Bat = function (legs, isVegatarian) {
    Mammal.call(this, legs);
    this.isVegatarian = isVegatarian;
};

Bat.prototype = Object.create(Mammal.prototype);  //This will over write out Bat constructor 
Bat.prototype.constructor = Bat;

Bat.prototype.fly = function () {
    return 'flying';
};

let fruitBat = new Bat('4', true);
fruitBat.sleep();
fruitBat.fly();

//Object literals 
//setProtoTypeOf method 
//Taking one object method and available to another object

let toyotaCar = {
    drive() {
        return 'driving toyota';
    }
};

let camry = {
    wifi() {
        return 'using wifi';
    },
    drive() {
        return `${super.drive()}`;
    }
};

Object.setPrototypeOf(camry, toyotaCar); //toyotaCar method availalbe to the camry
//OR
camry.__proto__ = toyota;
console.log(camry.drive());

//Object assign


/** JavaScript OOPs concept */
//Object oriented in JavaScript
//Encapsulation: Encapsulation is the process of hiding and securing the properties of objects.
class Animal {
    #name; //Private variable
    constructor (name) {
        this.#name = name;
    }

    setName(val) {
        this.#name = val;
    }

    getName() {
        return this.#name;
    }
}
var animal = new Animal("DOG");
animal.setName("CAT");
console.log(animal.getName()); //output: CAT
console.log(animal.name); //output: undefined

//Abstraction: Abstraction means hiding the implementation details and showing only behavior.
class Employee {
    #name;
    #baseSalary;
    setName(val) {
        this.#name = val;
    }
    setBaseSalary(val) {
        this.#baseSalary = val;
    }
    getName() {
        return this.#name;
    }
    getSalary() {  //Modification of salary is implementation of code which user wouldn't know.
        let bonus = 1000;
        return this.#baseSalary + bonus;
    }
}
var emp = new Employee();
emp.setName("abc");
emp.setBaseSalary(100);
console.log(emp.getName());
console.log(emp.getSalary());

//Inheritance: It’s a process by which child objects inherit the properties of the parent object.
class Person {
    constructor (name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor (name, rollNumber) {
        super(name);
        this.rollNumber = rollNumber;
    }
    logDetails() {
        console.log(`Name: ${this.name}, Roll number: ${this.rollNumber}`)
    }
}
var student = new Student("Heisenberg", 1);
student.logDetails();    // Name: Heisenberg, Roll number:1
student.sayName();       // Heisenberg

//Polymorphism: Polymorphism is the practice to design objects in such a way that 
//they share and override behavior from parent objects.
//Polymorphism - Method overriding and method overloading.
class Person {
    constructor (name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor (name, rollNumber) {
        super(name);
        this.rollNumber = rollNumber;
    }
    logDetails() {
        console.log(`Name: ${this.name}, Roll number: ${this.rollNumber}`)
    }
    sayName() {
        // do stuff
        console.log("From Student");
        super.sayName();
    }
}
var student = new Student("Heisenberg", 1);
student.logDetails();
student.sayName();      // From Student   Heisenberg

//Association: Association is the design principle by which different Objects can be associated 
//with each other to perform some task.It’s of two types:
//1. Aggregation : In Aggregation, objects are loosely coupled and can independently exist. 
//This means an object can exist even after its associated object is destroyed.

class Wall {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
}
class Room {
    constructor (wall) {
        this.wall = wall;
    }
    print() {
        console.log(this.wall);
    }
}
var wall = new Wall(1, 1);
var room = new Room(wall);
wall = null;
room.print();

//2- Composition: In Composition, objects are tightly coupled and cannot exist independently.
//Here’s the javascript implementation of composition:

class Wall {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
}
class Room {
    constructor (width, height) {
        this.wall = new Wall(width, height);
    }
    print() {
        console.log(this.wall);
    }
}
var room = new Room(1, 1);
room.print();

