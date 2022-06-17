/// <reference types="cypress" />

describe('First tests', function() {
    
    

    it('visit test', function() {
        cy.intercept('POST', '**/api/Desktop/SignIn*',).as('POSTsearch')

        cy.openCrm('/account?id=1')
        cy.get('#basic_login').type('crm')
        cy.get('#basic_password').type('ntcnjdsq@cntyl')
        cy.get('#basic_formSubmit').click()
        cy.wait('@POSTsearch').then(res => {
            expect(res.response.statusCode).to.eq(200)
          })
    })




})
