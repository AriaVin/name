/// <reference types="cypress"/>

beforeEach(() => {
    cy.loginByIp('/account?id=102585&num=100320030')
    cy.mockGetAccount()
    cy.mockGetUsers()
    cy.mockGetApproachListForSearch()
  })

describe('First tests', function() {


    it('icon test', function() {    
        cy.get('[data-icon="user-add"]').click()
        cy.contains('.ant-btn','Сохранить').click()
        cy.get('.ant-modal-close-x').click()
        
        
        
    })
    it('icon test2', function() {    
        cy.get('[data-icon="user-add"]').click()
        cy.contains('.ant-btn','Закрыть').click()
    })

    it('icon test3', function() {
        cy.get('[data-icon=edit]').click()
        cy.contains('.ant-btn','Закрыть').click()
    
    })   

})