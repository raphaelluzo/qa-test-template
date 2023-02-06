/// <reference types="cypress" />


describe("Fluxo de Novo Cliente", () => {
    before(() => {
        cy.fixture("credentials.json")
            .as("credentials")
        cy.fixture('credentials')
            .then(credentials => {
              cy.login(credentials.email, credentials.password);
          });
        cy.contains('Raphael', {timeout: 6000})
            .should('be.visible')
    })
    it("Novo Cliente", () => {
        cy.get('.sc-papXJ')
            .click()
        cy.get('button:nth-of-type(4)')
            .click()
        cy.contains('Nova pessoa')
            .should('be.visible')
        cy.cliente()   
    })

})