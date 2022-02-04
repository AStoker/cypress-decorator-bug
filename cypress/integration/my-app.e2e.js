/// <reference types="Cypress" />

context('my-app', () => {
  it('shows message', () => {
    cy.visit('/');
    cy.shadowGet('my-app').shadowFind('div').shadowContains('Hello World!');
  });
});
