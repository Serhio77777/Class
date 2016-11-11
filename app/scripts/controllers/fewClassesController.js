'use strict';

import angular from 'angular';

import Person from '../class/person.js';
import Brain from '../class/brainTranier.js';
import Strong from '../class/strongTranier.js';
import Worker from '../class/worker.js';


const moduleName = 'mapamagic.user.contrFewClass';

angular.module(moduleName, [])
    .controller('FewClassController', function () {
        'ngInject';
        let vm = this;
        console.log('%cFewClassController','background-color: blue; margin: 4px; padding: 3px; font-size: 15px; color: white;');

        Person.prototype.foodFunc = (data) => { // when I send data with new class, I get only prototype property
            data.brain += 1;
        };
        vm.girl = new Person({
            name: 'Tanya',
            age: 18,
            force: 17,
            brain: 75
        });

        class MaxClass extends Person {
            constructor(qqq) {
                super(qqq);
            }
            aaaa() {
                console.log(this);
            }
        }

        class AnotherClass extends MaxClass {
            constructor(qqq) {
                super(qqq);
            }
            aaaa() {
                console.log(this);
            }
        }

        vm.myClass = new AnotherClass ({
            name: '1111',
            age: 18,
            force: 17,
            brain: 75
        });


        vm.myClass.aaaa();
        vm.myClass.say();

        // We can't make one only identication of class with extends
        // We can make tree of prototypes


        // vm.anotherClass = new MaxClass ({
        //     name: '2222',
        //     age: 18,
        //     force: 17,
        //     brain: 75
        // });
        //
        // class MaxClass extends Strong {
        //     constructor(qqq) {
        //         super(qqq);
        //     }
        //     aaaa() {
        //         console.log(this);
        //     }
        // }
        //
        // vm.newClass = new MaxClass ({
        //     name: '333',
        //     age: 18,
        //     force: 17,
        //     brain: 75
        // });

        // console.log(vm.newClass, vm.myClass, vm.anotherClass);
        // console.log(MaxClass);
        // console.info(Person, Person.prototype);
        // console.debug(Brain, Brain.prototype, Brain instanceof Person);
        // console.info(Strong, Strong.prototype, Strong instanceof Person);

        class WorkerMy extends Worker {
            constructor(data) {
                super(data)
            }
        }

        vm.newClass = new WorkerMy ({
            name: 'Swewew',
            age: 18,
            force: 17,
            brain: 75
        });

        vm.newClass.say = (data) => {
            vm.newClass.sayWork('Programmer');
            console.log(`%c${this.name} - Age:${this.age} Force:${this.force} Brain:${this.brain} Work: ${vm.newClass.sayWork('Programmer')} ${this.work}`,'background-color: red; color: yellow; font-size: 12px;');
        };
        vm.newClass.sayWork('Programmer');
        vm.newClass.sayWork();
        vm.newClass.say();
        vm.newClass.__proto__.say();
        console.log(WorkerMy, vm.newClass);
      });

export default moduleName;
