describe('template Test suite',
    () => {
        before("Run before all tests", () => {

        })
        after("Run after all tests", () => {

        })
        beforeEach("Run before Each test case", () => {

        })
        afterEach("Run after each test case", () => {

        })
        xit('runs test case with filter <smoke>', () => {

        })
        it('runs test case without any filter', () => {
            cy.visit('/iframe.html?id=example-button--primary')
            cy.get('[data-cy="button"]')
                .should('be.visible')
                .invoke('css', 'background')
                .should('include', 'rgb(30, 167, 253)')
        })
    })