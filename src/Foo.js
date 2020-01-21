// @ts-check

/** @typedef {import('./Bar').default} Bar */

class Foo {
    /**
     * @param {Bar} bar
     */
    constructor(bar) {
        /** @type {Bar} */
        this.bar = bar;
      
        this.do();
    }

    /**
     * @returns {void}
     */
    do() {
        console.log(this.bar.baz);
    }
}
