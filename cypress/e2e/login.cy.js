/// <reference types="cypress" />
import { user } from '../support/constantes';

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Deve realizar o login com sucesso', () => {
        cy.login(user.email, user.password)

        cy.get('#swal2-title').should('have.text', 'Login realizado')
        cy.url().should('include', '/my-account')
    })

    it('Não deve fazer login com senha inválida', () => {
        cy.login(user.email, '123')

        cy.contains('span', 'Senha inválida.').should('be.visible')
    })

    it('Não deve fazer login com e-mail inválido', () => {
        cy.login('invalido', user.password)

        cy.contains('span', 'E-mail inválido.').should('be.visible')
    })

    it('Não deve fazer login com campos vazios', () => {
        cy.get('#user').should('not.be.empty')
        cy.get('#password').should('not.be.empty')
        cy.get('#btnLogin').click()

        cy.contains('span', 'E-mail inválido.').should('be.visible')
    })
});