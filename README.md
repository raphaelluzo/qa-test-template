# Teste - QA Ploomes 

1. Crie uma nova pasta para o projeto.

2. Abra a pasta no Visual Studio Code.

3. No terminal do Visual Studio Code, execute o seguinte comando (OBS: Se atentar a versão instalada se você ja tiver cache de outra versão anterior):

```bash
npm install
```

4. Para verificar se a instalação foi bem-sucedida, execute o seguinte comando: 

```bash
npx cypress open
```

5. Se o Cypress abrir corretamente, você pode começar a escrever testes.

## Pontos sobre o que foi feito:

* Os criterios foram atendidos: <br>
   1) (OK) JavaScript (Cypress)<br>
   2) (OK) Clean Code<br>
   3) (OK) Realizar teste na API do Ploomes:<br>
        CRUD em Clientes (/Contacts)<br>
        CRUD em Negócios (/Deals)<br>
   4) (OK) Teste no Front-end:<br>
        Login do sistema<br>
        CRUD em Clientes<br>
        CRUD em Negócios

* Usar fixtures permite separar os dados dos testes das implementações, o que ajuda a tornar o código mais limpo e fácil de manter logo foi criado "credentials.json" para uso no Login.

* Foi realizado a criação de Page Object x Cypress Command para facilitar a criação de testes e a manutenção. Cenários onde na pagina apresenta o preenchimento de um formulário funciona muito bem desta maneira e fluxos que são necessarios condicionais para torna-lo mais seguro do resultado. Está pratica de utilizar Cypress Command ou App Action traz esse diferencias que o Cypress tem.

* Sempre ter em mente utilizar o mínimo possível de cy.wait.

* Além dos cenários de cada parte do CRUD foi feito um com o fluxo completo do CRUD, tanto em API como em Web.

* Nos testes em API foi extraída um .json de seus "response" após a realização de cada teste para a pasta fixture.

* Foi feito o uso da biblioteca "faker.js" para o preenchimento dos dados tanto no Payload das API como nos Formulários dos Testes Web.

* Foi feito o uso da biblioteca ESLint Plugin para trazer a boa pratica do uso do Cypress para o código.

## Considerações: 

* Os inputs sem obrigatoriedade, o que eu digo com isso que muitos campos podem ser vazios e tornar o teste valido, o que talvez possa trazer um falso positivo.

* Não foi encontrado bugs de alta criticidades.

## Ponto de Vista:

* A plataforma Ploomes e as API tem uma ótima interação com o cypress o que não trouxe dificuldade com seu uso

* Como boa pratica o ideal para referenciar um elemento o uso de "data-cy" do elemento por exemplo mas, foi usado o CSS do elemento que funciona perfeitamente sem nenhum tipo de complemento de entendimento no Cypress, poderia ser utilizado o Xpath também se desejado mas seria necessário a biblioteca cypress-xpath.

* Poderia ser feito a criação de um Report de teste para o uso em uma CI/CD como Jenkis ou Azure por exemplo.

* O uso do Cumcumber é uma opção também para melhorar a escrita dos testes que pode ser feito.

* O uso da biblioteca Cypress-Grep traria o beneficio de tag para cada cenário de teste assim conseguimos executar com facilidade cenários por tag em headless.
O que tornaria os testes bem classificados para ser utilizados na CI/CD e traria maior facilidade na execução via headless.

* O uso de uma ferramenta como K6 para teste de desenvolvimento atrelado ao Cypress funcionaria muito bem para a plataforma.

### Muito obrigado pela oportunidade, gostei muito de fazer este teste.




