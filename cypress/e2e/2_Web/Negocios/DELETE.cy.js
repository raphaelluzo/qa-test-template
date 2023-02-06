/// <reference types="cypress" />


describe("Fluxo de Deletar Negocio", () => {
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
    it("Deletar Negocio", () => {
        cy.get('#modules > div:nth-of-type(3) .sc-gKXOVf')
            .click('center')
        cy.get('#deal_views')
            .then(($el) => {
                if ($el.text().includes("Tabela")) {
                    console.error("Tabela")
                } else {
                    $el.click()
                    cy.get('[ng-show="dealsCtrl.current_view !== \'table\'"]')
                        .click()
                }
              })
        cy.get('tbody:nth-of-type(2) > tr:nth-of-type(1) > td:nth-of-type(1)')
            .click()
        cy.get('.nowrap.button')
            .click()
        cy.get('[ng-if="$ctrl.deal.Deletable"]')
            .click()
        cy.get('[translate="CLICK_CONFIRM.CONFIRM"]')
            .click()
        cy.get('.toast-title', {timeout: 2000})
            .should("be.visible")
    })
})