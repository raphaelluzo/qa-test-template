<h2 align="center">Teste Pratico QA - Ploomes</h2><br><br> 

1. Crie uma nova pasta para o projeto.<br><br> 

2. Abra a pasta no Visual Studio Code.<br><br> 

3. No terminal do Visual Studio Code, execute o seguinte comando:<br> 
yarn init -y<br><br> 

4. Em seguida, instale o Cypress executando o seguinte comando:<br> 
yarn add cypress --dev<br><br> 

5. Para verificar se a instalação foi bem-sucedida, execute o seguinte comando:<br> 
yarn cypress open<br><br> 

6. Se o Cypress abrir corretamente, você pode começar a escrever testes.<br><br>

-----------<br><br>

<h3 align="center">Pontos sobre o que foi feito:</h3><br><br> 

* Usar fixtures permite separar os dados dos testes das implementações, o que ajuda a tornar o código mais limpo e fácil de manter logo foi criado "credentials.json" para uso no Login.<br><br>

* Foi realizado a criação de Page Object x Cypress Command para facilitar a criação de testes e a manutenção. Cenários onde na pagina apresenta o preenchimento de um formulário funciona muito bem desta maneira.<br><br>

* Sempre ter em mente utilizar o mínimo possível de cy.wait.<br><br>

* Além dos cenários de cada parte do CRUD foi feito um com o fluxo completo do CRUD, tanto em API como em Web.<br><br>

* Nos testes em API foi extraída um .json de seus "response" após a realização de cada teste para a pasta fixture.<br><br>

* Foi feito o uso da biblioteca "faker.js" para o preenchimento dos dados tanto no Payload das API como nos Formulários dos Testes Web.<br><br>

* Foi feito o uso da biblioteca ESLint Plugin para trazer a boa pratica do uso do Cypress para o código.<br><br>

-----------<br><br>

<h3 align="center">Ponto de Vista:</h3><br><br> 

* A plataforma Ploomes e as API tem uma ótima interação com o cypress o que não trouxe dificuldade com seu uso.<br><br>

* Como boa pratica o ideal para referenciar um elemento o uso de "data-cy" do elemento por exemplo mas, foi usado o CSS do elemento que funciona perfeitamente sem nenhum tipo de complemento de entendimento no Cypress, poderia ser utilizado o Xpath também se desejado mas seria necessário a biblioteca cypress-xpath.<br><br>

* Poderia ser feito a criação de um Report de teste para o uso em uma CI/CD como Jenkis ou Azure por exemplo.<br><br>

* O uso do Cumcumber é uma opção também para melhorar a escrita dos testes que pode ser feito.<br><br>

* O uso da biblioteca Cypress-Grep traria o beneficio de tag para cada cenário de teste assim conseguimos executar com facilidade cenários por tag em headless.<br><br>




