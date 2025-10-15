/// <reference types = "Cypress" />

// Prompt Used: create a basic cypress test structure with page visit in pexels.com

describe('Pexels.com', () => {
  it('Visits Pexels.com', () => {
    cy.visit('https://www.pexels.com/')
  })
})
