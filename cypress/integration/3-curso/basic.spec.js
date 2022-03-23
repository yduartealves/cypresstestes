/// <reference types="cypress" />

describe('cypress basic', ()=>{
    it('visitar pagina e validar titulo', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().debug.should('be.equal', 'Campo de Treinamento')
    })

    it('Encontrar e interagir com elemento', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    })
})