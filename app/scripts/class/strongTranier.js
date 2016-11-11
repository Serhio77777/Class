'use strict';

class Strong {
    constructor(force) {
        this.force = force;
        this.showMyStrong = () => {
            console.log(`${this.force}`);
        }
    }
}

export default Strong;
