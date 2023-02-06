/// <reference types="cypress" />

describe("Login", () => {
    
    before(() => {
      cy.fixture("credentials.json").as("credentials");
    });
    it("Login com sucesso", () => {

        cy.fixture('credentials').then(credentials => {
            cy.login(credentials.email, credentials.password);
        });

        cy.contains('Raphael')
            .should('be.visible');
  })
})