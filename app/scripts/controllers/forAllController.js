'use strict';

import angular from 'angular';

import Person from '../class/person.js';

const moduleName = 'mapamagic.user.contrAll';

angular.module(moduleName, [])
    .controller('AllController', function () {
        'ngInject';
        let vm = this;
        console.log('%cAllController','background-color: blue; margin: 4px; padding: 3px; font-size: 15px; color: white;');
        Person.prototype.foodFunc = (data) => {
            data.brain += 1;
        };
        class Tran extends Person {// It is like a service with prototypes
            constructor(dataPerson) {
                super(dataPerson);
            }

            strongTran() {
                this.force += 1;
            }

            brainTran() {
                this.brain += 1;
            }
        }

        vm.boy = new Tran({
            name: 'Serhio',
            age: 18,
            force: 26,
            brain: 93
        });

        vm.girl = new Tran({
            name: 'Anastasya',
            age: 18,
            force: 13,
            brain: 83
        });
        vm.boy.say();
        vm.girl.say();

        vm.boy.brainTran()
        vm.boy.brainTran()
        vm.boy.strongTran()
        vm.boy.brainTran()

        vm.girl.strongTran()
        vm.girl.brainTran()
        vm.girl.strongTran()
        vm.girl.brainTran()

        vm.boy.say();
        vm.girl.say();

        console.log(Tran, vm.girl, vm.boy, Tran instanceof Person);

      });

export default moduleName;
