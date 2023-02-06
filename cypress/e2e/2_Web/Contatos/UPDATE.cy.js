/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';

describe("Fluxo de Alteracao de Dados de Cliente", () => {
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
    it("Editar dados de Email do Cliente", () => {
        cy.get('#modules > div:nth-of-type(2) .sc-gKXOVf')
            .click('center')
        cy.get('[uib-tooltip="Pessoas"]')
            .click()
        cy.get('tbody:nth-of-type(2) > tr:nth-of-type(1) > td:nth-of-type(1)')
            .click()
        cy.get('.nowrap.button')
            .click()
        cy.get('[ng-click="$ctrl.editContact()"]')
            .click()
        cy.get('[name="contact_email"]')
            .clear()
            .type(faker.internet.email())
        cy.get('[ng-disabled="newContactCtrl.loading"]')
            .click({ force: true })
    })
})