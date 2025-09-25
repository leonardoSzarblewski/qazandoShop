Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.get('#user').type(nome)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('login', (email, senha) => {
    cy.get('#user').type(email)
    cy.get('#password').type(senha)
    cy.get('#btnLogin').click()
})