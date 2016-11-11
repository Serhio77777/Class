'use strict';

import Person from './person.js';

class Worker extends Person{
    constructor(data) {
        super(data);
        console.log(this);
    }

    sayWork(work) {
        this.work = work || 'I am not working';
        console.log('%c' + this.work,'background-color: green; color: yellow; font-size: 11px;');
    }

}

export default Worker;
