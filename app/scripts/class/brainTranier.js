'use strict';

class Brain {
    constructor(intelligence) {
        this.intelligence = intelligence;
        this.showMyIntelligence = () => {
            console.log(`${this.intelligence}`);
        }
    }
}

export default Brain;
