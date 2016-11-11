'use strict';

class Person {
    constructor(obj) { //name, age, happines
        this.name = obj.name;
        this.age = obj.age;
        this.force = obj.force;
        this.brain = obj.brain;
    }
    say() {
        console.log(`%c${this.name} - Age:${this.age} Force:${this.force} Brain:${this.brain}`,'background-color: red; color: yellow; font-size: 12px;');
    }
}

export default Person;
