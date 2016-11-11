'use strict';

import angular from 'angular';

import Person from '../class/person.js';
// import Brain from '../class/brainTranier.js';
// import Strong from '../class/strongTranier.js';

const moduleName = 'mapamagic.user.contrMixin';

angular.module(moduleName, [])
    .controller('MixinController', function () {
        'ngInject';
        let vm = this;
        console.log('%cMixController','background-color: blue; margin: 4px; padding: 3px; font-size: 15px; color: white;');

        let NewMixin = {
            sayMyWord() {
                console.log('Work');
            },
            sayMyNumber() {
                console.log(24);
            }
        }

        Person.prototype.foodFunc = (data) => { // when I send data with new class, I get only prototype property
            data.brain += 1;
        };

        vm.girl = new Person({
            name: 'Tanya',
            age: 18,
            force: 17,
            brain: 75
        });

        // class FirstClass extends Person {
        //     constructor(data) {
        //         super(data);
        //     }
        //
        //     sayMyWord() {
        //         console.log('Work');
        //     }
        // }
        //
        // vm.firstClass = new FirstClass({
        //     name: 'Developer First',
        //     age: 18,
        //     force: 17,
        //     brain: 75
        // });
        //
        // class SecondClass extends Person {
        //     constructor(data) {
        //         super(data);
        //     }
        //
        //     sayMyNumber() {
        //         console.log(2);
        //     }
        // }
        // vm.secondClass = new SecondClass({
        //     name: 'Developer First',
        //     age: 18,
        //     force: 17,
        //     brain: 75
        // });
        //
        // vm.firstClass.sayMyWord();
        // vm.secondClass.sayMyNumber();

        // console.info(Person, vm.girl);
        // console.debug(Brain, Brain.prototype, Brain instanceof Person);

        class FirstClass extends Person {
            constructor(data) {
                super(data);
            }
            sayMyWord() {
                console.log(`%cWork ${this.name}`,'background-color: black; color: white; font-size: 11px;');
            };

            sayMyNumber() {
                console.log('%c' + 2,'background-color: black; color: white; font-size: 11px;');
            }
        }

        class SecondClass extends FirstClass {
            constructor(data) {
                super(data);
            }

            sayMyNumber() {
                console.log('%c' + 4,'background-color: grey; color: black; font-size: 11px;');
            }
        }
        vm.secondClass = new SecondClass({
            name: 'Developer First',
            age: 18,
            force: 17,
            brain: 75
        });
        vm.secondClass.prototype = class NewMixin {
            constructor() {};
            sayMyWord() {
                console.log(`%cWork ${this.name}`,'background-color: grey; color: black; font-size: 11px;');
            };
            sayMyNumber() {
                console.log(24);
            };
        };

        console.log(vm.secondClass);

        // vm.secondClass.__proto__.sayMyWord();
        vm.secondClass.sayMyNumber();
        vm.secondClass.__proto__.sayMyNumber();
        vm.secondClass.__proto__.__proto__.sayMyNumber();
        // vm.secondClass.prototype.sayMyNumber();
        vm.secondClass.sayMyWord();
        vm.secondClass.__proto__.sayMyWord();
        // vm.secondClass.sayMyWord();
        // vm.secondClass.prototype.sayMyWord();
        // vm.secondClass.sayMyNumber();
        // vm.secondClass.sayMyNumber();


      });

export default moduleName;
