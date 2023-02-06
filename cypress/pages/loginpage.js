class LoginPage {
    
    visit() {
      cy.visit("https://app.ploomes.com/");
    }
  
    get emailInput() {
      return cy.get('#Username');
    }
  
    get passwordInput() {
      return cy.get('#Password');
    }
  
    get submitButton() {
      return cy.get('#Bt_Login');
    }
  }
  
  export default new LoginPage();