/// <reference types="cypress" />


describe("Fluxo de Novo Negocio", () => {
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
    it("Novo Negocio", () => {
        cy.get('.sc-papXJ')
            .click()
        cy.get('.p-15 button:nth-of-type(2)')
            .click()
        cy.contains('Título')
            .should('be.visible')
        cy.negocio()  
    })
})