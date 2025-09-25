/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('leo@gmail.com', '123456')

        cy.get('#swal2-title').should('have.text', 'Login realizado')
        cy.url().should('include', '/my-account')
    })

    it('Não deve fazer login com senha inválida', () => {
        cy.login('leo@gmail.com', '123')

        cy.contains('span', 'Senha inválida.').should('be.visible')
    })

    it('Não deve fazer login com e-mail inválido', () => {
        cy.login('leo', '123456')

        cy.contains('span', 'E-mail inválido.').should('be.visible')
    })

    it('Não deve fazer login com campos vazios', () => {
        cy.get('#user').should('not.be.empty')
        cy.get('#password').should('not.be.empty')
        cy.get('#btnLogin').click()

        cy.contains('span', 'E-mail inválido.').should('be.visible')
    })
});