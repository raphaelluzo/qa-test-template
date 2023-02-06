/// <reference types="cypress" />


describe("Fluxo para Listar Negocios", () => {
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
    it("Listar Negocios em Tabela", () => {
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
    })
    it("Listar Negocios em Funil", () => {
        cy.get('#modules > div:nth-of-type(3) .sc-gKXOVf')
        .click('center')
    cy.get('#deal_views')
        .then(($el) => {
            if ($el.text().includes("Funil")) {
                console.error("Funil")
            } else {
                $el.click()
                cy.get('[ng-show="dealsCtrl.current_view !== \'funnel\'"]')
                    .click()
            }
          }) 
    })
})