// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import index.js using ES2015 syntax:
import './index.js'
import 'cypress-axe'
beforeEach(function (){
    console.log("=======>>>", Cypress.mocha.getRunner().suite.ctx.currentTest.title)
    let testFilter = Cypress.env('SUITE');
    if(!testFilter) {
        return;
    }
    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testFilter = "<" + testFilter + ">"
    if (!testName.includes(testFilter)) {
        this.skip();
    }
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => false)