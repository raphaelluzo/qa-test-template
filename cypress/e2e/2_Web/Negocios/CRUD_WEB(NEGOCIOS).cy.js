/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';

describe("Fluxo de Novo Negocio", () => {
    beforeEach(() => {
        cy.fixture("credentials.json")
            .as("credentials")
        cy.fixture('credentials')
            .then(credentials => {
              cy.login(credentials.email, credentials.password);
          });
        cy.contains('Raphael', {timeout: 8000})
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

    it("Listar Negocios em Tabela", () => {
        cy.get('#modules > div:nth-of-type(3) .sc-gKXOVf', {timeout: 6000})
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

    it("Editar Valor do Negocio", () => {
        cy.get('#modules > div:nth-of-type(3) .sc-gKXOVf', {timeout: 6000})
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
    cy.get('[ng-click="selectPage(totalPages, $event)"]')
        .click()
    cy.contains(Cypress.env('fakeName2'))
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

    it("Deletar Negocio", () => {
        cy.get('#modules > div:nth-of-type(3) .sc-gKXOVf', {timeout: 6000})
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
        cy.get('[ng-click="selectPage(totalPages, $event)"]')
            .click()
        cy.contains(Cypress.env('fakeName2'))
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