'use strict';

import angular from 'angular';

import Person from '../class/person.js';
// import Brain from '../class/brainTranier.js';
// import Strong from '../class/strongTranier.js';

const moduleName = 'mapamagic.user.contr';

angular.module(moduleName, [])
    .controller('Controller', function () {
        'ngInject';
        let vm = this;
        console.log('%cController','background-color: blue; margin: 4px; padding: 3px; font-size: 15px; color: white;');
        // console.log(Person);

        // console.log(Object.isExtensible(Person));
        // Person.prototype.braineTrainier = Object.setPrototypeOf({},Brain);   ===    Person.prototype.braineTrainier = Object.create(Brain);

        // Brain.prototype.__proto__ = Person;    ???

        let NewMixin = {
            tranier: () => {
                console.log(this);
            }
        }
        Person.prototype.foodFunc = (data) => { // when I send data with new class, I get only prototype property
            // this.Girl.brain += 1;
            data.brain += 1;
            // console.log(this);
        };
        // Person.prototype.foodObjFunc = {
        //     food:() => { // when I send data with new class, I get only prototype property
        //         console.log(this);
        //         // data.brain += 1;
        //     }
        // }


        // Strong.prototype.tranier = () => {
        //     this.strong.force += 1;
        //     console.log(`${this.strong.force}`);
        // };
        // Brain.prototype.tranier = () => {
        //     this.brain.intelligence += 1;
        //     console.log(`${this.brain.intelligence}`);
        // };

        // vm.strong = new Strong(13);
        // vm.brain = new Brain(15);
        vm.girl = new Person({
            name: 'Tanya',
            age: 18,
            force: 17,
            brain: 75
        });
        // function showCharacter () {
        //     vm.Girl.say();
        //     vm.Girl.food();
        // }
        // function trany (params) {
        //     params.tranier();
        // }
        // showCharacter();

        // trany(vm.strong);
        // trany(vm.brain);
        // trany(vm.brain);
        // console.log(vm.Girl);
        // console.log(vm.strong, vm.brain);


        class Brain extends Person {
            constructor(dataPerson) {
                super(dataPerson);
                // this.brainTran = () => { // I can chanfe it if i want
                //     this.brain += 1;
                //     console.log(this.brain);
                // }
            }

            brainTran() { // I can change this too
                this.brain += 1;
            }

            showCharacter() {
                console.log(this.brain);
            }
                // get brainTran() {
                //     return this.brain += 1;
                // }
                //
                // set brainTran(value) {
                //     console.log(`${this.brain} ${value}`);
                // }
        };
        class Strong extends Person {
            constructor(dataPerson) {
                super(dataPerson);
            }

            strongTran() {
                this.force += 1;
            }

            showCharacter() {
                console.log(this.force);
            }
        };
        vm.strong = new Strong({
            name: 'Anna',
            age: 18,
            force: 36,
            brain: 53
        });

        vm.brain = new Brain({
            name: 'Anastasya',
            age: 18,
            force: 9,
            brain: 83
        });

        vm.brain.say();
        vm.brain.brainTran();
        vm.brain.say();

        vm.strong.say();
        vm.strong.strongTran();
        vm.strong.say();

        vm.brain.showCharacter();
        vm.strong.showCharacter();

        vm.brain.foodFunc(vm.brain); // When I send this it takes all branches of prototypes
        vm.strong.foodFunc(vm.strong);
        // vm.brain.foodObjFunc.food();
        // vm.strong.foodObjFunc.food();

        vm.brain.showCharacter();
        vm.strong.showCharacter();

        console.info(Person, vm.girl);
        console.debug(Brain, vm.brain, Brain instanceof Person);
        console.info(Strong, vm.strong, Strong instanceof Person);

      });

export default moduleName;
