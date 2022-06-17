/// <reference types="cypress" />

//mocks

Cypress.Commands.add('mockGetAccount', () => {
    cy.intercept(`**/api/Account/GetAccount?*`, require('./data/getAccount.json'))
  })

  Cypress.Commands.add('mockGetUsers', () => {
    cy.intercept(`**/api/User/GetUsers?id`, require('./data/getUsers.json'))
  })

  Cypress.Commands.add('mockGetApproachListForSearch', () => {
    cy.intercept(`**/api/Approach/GetApproachListForSearch`, require('./data/getApproachListForSearch.json'))
  })
  
  Cypress.Commands.add('mockGetApproachListForSearchSearhed', () => {
    cy.intercept(`**/api/Approach/GetApproachListForSearch`, require('./data/getApproachListForSearchSearched.json'))
  })