/// <reference types="cypress" />

beforeEach(() => {
    cy.loginByIp('/account?id=2&num=2091000001')
  })

describe('First tests', function() {


    it('icon test', function() {    
        cy.contains('.ant-tabs-tab-btn','Задачи').click()
        cy.contains('.headerCell__1a467ed','Тип').should('contain', 'Тип')
        cy.contains('.ant-tabs-tab-btn','События').click()
        cy.contains('.headerCell__1a467ed','Тип события').should('contain', 'Тип события')
        cy.contains('.ant-tabs-tab-btn','Заявки').click()
        cy.contains('.headerCell__1a467ed','Номер').should('contain', 'Номер')
        cy.contains('.ant-tabs-tab-btn','Документы').click()
        cy.contains('.headerCell__1a467ed','Наименование').should('contain', 'Наименование')
        cy.contains('.ant-tabs-tab-btn','Обращения').click()
        cy.contains('.headerCell__1a467ed','Направление').should('contain', 'Направление')
            
    })
    it('fields test', function() {
        cy.contains('.ant-tabs-tab-btn','Задачи').click()
    })
  
   

})