class FormsNegocio {
    
  
    get tituloInput() {
      return cy.get('input[name="deal_title"]');
    }
  
    get valorInput() {
      return cy.get('input[name="deal_amount"]');
    }
  
    get clienteInput() {
      return cy.get('[ng-if="section.Id === \'null\'"] span:nth-of-type(3) input:nth-of-type(2)');
    }

    get marcadoresInput() {
      return cy.get('[api-url="Tags"] [placeholder]');
    }

    get origemInput() {
      return cy.get('[api-url="Contacts@Origins"] [placeholder]');
    }

    get submitButton() {
      return cy.get('[ng-disabled="newDealCtrl.loading"]');
    }
  }
  
  export default new FormsNegocio();