/// <reference types="cypress" />


describe("Fluxo para Listar Clientes", () => {
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
    it("Listar Clientes em Tabela", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf')
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('th:nth-of-type(1)')
            .should("be.visible")
    })
})