// @ts-check

/** @typedef {import('./Bar').default} Bar */

/**
 * PriceElement
 */
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
        this.bar = 4;
        console.log(this.bar.baz);
    }
}
