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
            it('loads Button in storybook', function() {
                cy.visit('/iframe.html?id=example-button--primary')
                cy.contains('Button');
                cy.get('[data-cy="button"]')
                    .should('be.visible')
                    .invoke('css', 'background')
                    .should('include', 'rgb(30, 167, 253)')
            });
    })