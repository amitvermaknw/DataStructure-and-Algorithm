//Module

function Employee() {
    let empName = 'Amit';
    let company = 'abc';
    let salary = 1000;

    let getSalary = () => {
        let bonus = 1000;
        salary = salary.bonus;
    };

    return {
        empName: empName,
        company: company,
        salary: getSalary()
    }
}

const emp = Employee();
emp.salary;

//Singleton 
//An example is a database connection pool.
//The pool manages the creation, destruction, and lifetime of all database connections for 
//Singleton is a design pattern that ensures that a class has only one immutable instance. 
//Said simply, the singleton pattern consists of an object that can't be copied or modified. 
//It's often useful when we want to have some immutable single point of truth for our application.

//Let's say for example we want to have all of our app's configuration in a single object.
//And we want to disallow any duplication or modification of that object.

class Config {
    constructor () { }

    start() {
        console.log('start db');
    }

    update() {
        console.log("updatign the method")
    }
};

let config = new Config();
Object.freeze(config); //Now we cannot add the more method outside with this class.


/**
 * Factory Method Pattern
The Factory method pattern provides an interface for creating objects that can be modified after creation. 
The cool thing about this is that the logic for creating our objects is centralized in a single place, 
simplifying and better organizing our code.
 */

function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"

/**
 * Prototype Pattern
The Prototype pattern allows you to create an object using another object as a blueprint, 
inheriting its properties and methods.
 */
// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

Object.setPrototypeOf(bug1, enemy)

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }
console.log(bug1.phrase) // Your debugger doesn't work with me!
console.log(bug1.attack()) // Pim Pam Pum!
console.log(bug1.flyAway()) // Flyyyy like an eagle!

/**
 * Observer Pattern
The observer pattern lets you define a subscription mechanism to notify multiple objects 
about any events that happen to the object they’re observing.

React's useEffect hook might be a good example here. What useEffect does is execute a given function at the moment we declare.

The hook is divided in two main parts, the executable function and an array of dependencies. If the array is empty, like in the following example, 
the function gets executed each time the component is rendered.

Even plain old JavaScript event listeners can be thought of as observers. 
Also, reactive programming and libraries like RxJS,
*/

