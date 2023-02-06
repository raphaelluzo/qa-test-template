/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';

describe("Fluxo de Alteracao de Dados do Negocio", () => {
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
    it("Editar Valor do Negocio", () => {
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
    cy.get('[ng-click="$ctrl.editDealFn()"]')
        .click()
    cy.get('input[name="deal_amount"]')
        .clear()
        .type(faker.phone.number('######'))
    cy.get('[ng-disabled="newDealCtrl.loading"]')
        .click({ force: true })
    })
})