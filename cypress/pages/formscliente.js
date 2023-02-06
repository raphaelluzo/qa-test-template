class FormsCliente {
    
  
    get nameInput() {
      return cy.get('[name="contact_name"]');
    }
  
    get empresaInput() {
      return cy.get('[api-url="Contacts"] [placeholder]');
    }
  
    get phoneInput() {
      return cy.get('[ng-model="model.PhoneNumber"]');
    }

    get emailInput() {
      return cy.get('[name="contact_email"]');
    }

    get cargoInput() {
      return cy.get('[api-url="Roles"] [placeholder]');
    }

    get departamentoInput() {
      return cy.get('[api-url="Departments"] [placeholder]');
    }

    get submitButton() {
      return cy.get('.button-action');
    }
  }
  
  export default new FormsCliente();