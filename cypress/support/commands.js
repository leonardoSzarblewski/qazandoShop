Cypress.Commands.add('preencheCadastro', (nome, email, senha) => {
    cy.get('#user').type(nome)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#btnRegister').click()

})