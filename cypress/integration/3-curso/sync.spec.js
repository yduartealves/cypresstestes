/// <reference types="cypress" />


describe('Work with basic elements', ()=>{


    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })

    it('clickagorademorado', ()=>{

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('agorasim!!')
       })

   it('uso do find', ()=>{

    cy.get('#buttonList').click()    
    cy.get('#lista li')
       .find('span')
       .should('contain', 'Item 1')
    cy.get('#lista li span')
    .should('contain', 'Item 2')

       })
   
       it('uso do timeout', ()=>{

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout:5000 }).should('exist')
    
           })

    it.only('then vs should', ()=>{

        cy.get('#buttonListDOM').then($el =>{

            expect($el).to.have.length(1)
           // return 2
        })//.and('eq',2)
           .and('have.id','buttonListDOM')

    })      
    

})