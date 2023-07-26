const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("que o usuário esteja no site da VR", () => {
    cy.visit('/');
});

When('é acessado o menu -> Onde usar meu VR?', () => {
   cy.get(':nth-child(3) > .vr-main-navigation__link').click({force:true});
   cy.url().should('contains','/onde-aceita.htm');
})

Then('é aberto o mapa da google', () => {
  cy.get('#mapa_pagina').should('exist');
})
