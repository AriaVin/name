/// <reference types="cypress" />

beforeEach(() => {
    cy.loginByIp('/account?id=2&num=2091000001')
  })

describe('First tests', function() {


    it('btn test', function() {    
        cy.contains('.ant-btn-primary','задача').click()
        cy.get('.ant-modal-close-x').click()
        
    })

    it('btn test2', function() {    
        cy.contains('.ant-btn-primary','задача').click()
        cy.contains('.ant-btn','Закрыть').click()
        
    })
    it('btn test3', function(){
        cy.contains('.ant-btn-primary','событие').click() 
        cy.get('.ant-modal-close-x').click()  
    })

    it('btn test4',function(){
        cy.contains('.ant-btn-primary','событие').click() 
        cy.contains('.ant-btn','Закрыть').click()  
    })

    it('btn test5',function(){
        cy.contains('.ant-btn-primary','обращение').click() 
        cy.get('.ant-modal-close-x').click()  
    })

    it('btn test6',function(){
        cy.contains('.ant-btn-primary','обращение').click() 
        cy.contains('.ant-btn','Закрыть').click() 
    })

    it('btn test7',function(){
        cy.contains('.ant-btn-primary','заявка').click() 
        cy.get('.ant-modal-close-x').click()   
    })

    it('btn test8',function(){
        cy.contains('.ant-btn-primary','заявка').click()
        cy.contains('.ant-btn','Закрыть').click() 
    })

    it('btn test9',function(){
        cy.contains('.ant-btn-primary','Принять показания').click()
        cy.get('.ant-modal-close-x').click()  
    })

    it('btn test10',function(){
        cy.contains('.ant-btn-primary','Принять показания').click()
        cy.contains('.ant-btn','Отменить').click()
    })



})