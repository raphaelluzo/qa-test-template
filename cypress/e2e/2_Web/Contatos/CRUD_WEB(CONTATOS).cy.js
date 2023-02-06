/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';

describe("Fluxo de Novo Cliente", () => {
    beforeEach(() => {
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

    it("Listar Clientes em Tabela", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf', {timeout: 6000})
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('th:nth-of-type(1)')
            .should("be.visible")
    })

    it("Editar dados de Email do Cliente", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf', {timeout: 6000})
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('[ng-click="selectPage(totalPages, $event)"]')
            .click()
        cy.contains(Cypress.env('fakeName'))
            .click()
        cy.get('.nowrap.button')
            .click()
        cy.get('[ng-click="$ctrl.editContact()"]')
            .click()
        cy.get('[name="contact_email"]', {timeout: 6000})
            .clear()
            .type(faker.internet.email())
        cy.get('[ng-disabled="newContactCtrl.loading"]')
            .click({ force: true })
    })


    it("Deletar Cliente", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf', {timeout: 6000})
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('[ng-click="selectPage(totalPages, $event)"]')
            .click()
            cy.contains(Cypress.env('fakeName'))
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