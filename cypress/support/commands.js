// Login Page
import LoginPage from '../pages/loginpage.js';
Cypress.Commands.add("login", (email, password) => {
    LoginPage.visit();
    LoginPage.emailInput.type(email);
    LoginPage.passwordInput.type(password);
    LoginPage.submitButton.click();
  });

Cypress.Commands.add("visitweb", () => {
    LoginPage.visit();
  });

import { faker } from '@faker-js/faker/locale/pt_BR';

// Forms Clientes
import FormsCliente from '../pages/formscliente.js';
Cypress.Commands.add("cliente", () => {
    let name = faker.name.firstName()
    Cypress.env('fakeName', name);
    FormsCliente.nameInput.type(Cypress.env('fakeName'));
    FormsCliente.empresaInput.type("Teste", {delay: 500}).type('{downArrow}').type('{enter}');
    FormsCliente.phoneInput.type(faker.phone.number('119########'));
    FormsCliente.emailInput.type(faker.internet.email());
    FormsCliente.cargoInput.type("Gerente", {delay: 500}).type('{downArrow}').type('{enter}');
    FormsCliente.departamentoInput.type("Comercial", {delay: 500}).type('{downArrow}').type('{enter}');
    FormsCliente.submitButton.click(); 
  });

// Forms Negocios
import FormsNegocio from '../pages/formsnegocio.js';
Cypress.Commands.add("negocio", () => {
    let name = "Teste" + faker.phone.number('###')
    Cypress.env('fakeName2', name);
    FormsNegocio.tituloInput.type(Cypress.env('fakeName2'));
    FormsNegocio.valorInput.type(faker.phone.number('######'));
    FormsNegocio.clienteInput.click({delay: 500}).type('{downArrow}', {delay: 500}).type('{enter}');
    FormsNegocio.submitButton.click(({delay: 6000}));
  });

