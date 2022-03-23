/// <reference types="cypress" />


describe('Work with basic elements', ()=>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })
    it('visitar pagina e achar texto', ()=>{
       

        cy.get('.facilAchar').should('contain', 'Cuidado')
    })

        it('clickagora', ()=>{

         cy.get('[href="#"]').click()
         cy.get('#resultado').should('have.text','Voltou!')

         cy.reload()
         cy.get('#resultado').should('have.not.text','Voltou!')
         cy.contains('Voltar').click()
         cy.get('#resultado').should('have.text','Voltou!')
        })

        it('text field', ()=>{

            cy.get('#formNome').type('Cypress text')
            cy.get('#formNome').should('have.value','Cypress text')

            cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value','textarea')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('????')

            cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('erro{selectall}acerto',{delay:100})
            .should('have.value','acerto')

           })

           it('radio', ()=>{

            cy.get('#formSexoFem')
            .click()
            .should('be.checked')
            
            cy.get('#formSexoMasc')
            .should('not.be.checked')

            cy.get('[name=formSexo]')
            .should('have.length',2)

           })

           it('checkbox', ()=>{

            cy.get('#formComidaPizza')
            .click()

            cy.get('[name=formComidaFavorita]')
            .click({multiple:true})

           })
///tetsetsests
           it.only('select', ()=>{

            cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value','2graucomp')
            //TODO validar opcoes do combo
    
           })
           it.only('select multiplo', ()=>{

            cy.get('#formEsportes')
            .select(['natacao','Corrida','nada'] )

            //TODO validar opcoes selecionadas combo multiplo
    
           })


})