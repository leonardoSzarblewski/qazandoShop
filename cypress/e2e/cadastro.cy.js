/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Teste da página de cadastro', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = faker.internet.password(6)

    beforeEach(() =>{
        cy.visit('https://automationpratice.com.br/register')
    })
    it('Cadastro com sucesso', () => {
        cy.preencheCadastro(nome, email, senha)

        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
        cy.contains('button', 'OK').should('be.visible').click()
    });

    it('Cadastro com todos os campos vazios', () => {
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Senha com menos de seis digitos', () => {
        cy.preencheCadastro(nome, email, faker.string.alphanumeric({ length: 5 }))

        cy.contains('span', 'O campo senha deve ter pelo menos 6 dígitos').should('be.visible')
    })

    it('Campo e-mail inválido', () => {
        cy.preencheCadastro(nome, 'leo.com', senha)

        cy.contains('span', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
            .and('exist')
    })
});