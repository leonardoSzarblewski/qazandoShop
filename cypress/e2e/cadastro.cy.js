/// <reference types="cypress" />
import { user } from '../support/constantes';

describe('Teste da página de cadastro', () => {
    beforeEach(() =>{
        cy.visit('/register')
    })
    it('Deve realizar o cadastro com sucesso', () => {
        cy.cadastro(user.fullName, user.email, user.password)

        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
        cy.contains('button', 'OK').should('be.visible').click()
    });

    it('Cadastro com todos os campos vazios', () => {
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Senha com menos de seis digitos', () => {
        cy.cadastro(user.fullName, user.email, '123')

        cy.contains('span', 'O campo senha deve ter pelo menos 6 dígitos').should('be.visible')
    })

    it('Campo e-mail inválido', () => {
        cy.cadastro(user.fullName, 'invalido', user.password)

        cy.contains('span', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
            .and('exist')
    })
});