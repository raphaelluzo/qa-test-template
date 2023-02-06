/// <reference types="cypress" />


describe("Fluxo de Deletar Contato", () => {
    before(() => {
        cy.fixture("credentials.json")
            .as("credentials")
        cy.fixture('credentials')
            .then(credentials => {
              cy.login(credentials.email, credentials.password);
          });
        cy.contains('Raphael')
            .should('be.visible')
    })
    it("Deletar Cliente", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf')
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('tbody:nth-of-type(2) > tr:nth-of-type(1) > td:nth-of-type(1)')
            .click()
        cy.get('.nowrap.button')
            .click()
        cy.get('[ng-click="$ctrl.deleteContact()"]')
            .click()
        cy.get('[translate="CLICK_CONFIRM.CONFIRM"]')
            .click()
        cy.get('.toast-title', {timeout: 2000})
            .should("be.visible")
    })
})