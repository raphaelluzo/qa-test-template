/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';


describe('CRUD API (/Deals)', function () {
    const baseUrl = 'https://api2.ploomes.com';
    const apiKey = 'A54B0E3FEE8F754DD0BF0BD16A78AE5AF6D91608FD97A919DD295CC09A2F5113E6D43821B192DF965B51B81427C384A8B486BDF2F58DC1AA4D0EF08C25F515D7';
    let payload = {
        body: {
            "Title": "Teste" + faker.phone.number('###'),
            "ContactId": 0,
            "Amount": faker.phone.number('######'),
            "StageId": 0,
            "OtherProperties": [
                {
                    "FieldKey": "{fieldKey}",
                    "StringValue": "Teste"
                },
                {
                    "FieldKey": "{fieldKey}",
                    "IntegerValue": 2
                }
            ]
        }
    }

    // GET 
    it('Buscar Contato', function () {
      cy.request({
        method: 'GET',
        url: baseUrl + "/Deals?$top=1&$skip=0&$orderby=Id%20desc",
        headers: { 
            'User-Key' : `${apiKey}` 
        },
      }).then(response => {
        expect(response.status).to.eq(200)
        cy.writeFile('cypress/fixtures/Negocio(API)/GET(Negocio).json', response.body)
        })
    })
})
  