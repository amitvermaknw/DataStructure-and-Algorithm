/**
 * we have a class User and a class EventEmitter that implements event generation, 
 * and we’d like to add the functionality of EventEmitter to User, so that our users can emit events.
There’s a concept that can help here, called “mixins”.
 */

// mixin
let sayHiMixin = {
    sayHi() {
        alert(`Hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    }
};

// usage:
class User {
    constructor (name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!