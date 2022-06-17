/// <reference types="cypress" />

const directionValue = 'Входящее'

beforeEach(() => {
    cy.loginByIp('/account?id=2&num=2091000001')
    cy.mockGetAccount()
    cy.mockGetUsers()
    cy.mockGetApproachListForSearch()
  })

describe('First tests', function() {

    it('Пользователь кликает по полю Направление -> открывается выпадающий список', function() {    
        cy.get('#approachType').click({force: true});
        cy.contains('.ant-select-item-option-content', directionValue).should('be.visible');       
    })

    it('Пользователь заполняет поле Направление -> выбранные данные отображаются', function() {    
        cy.get('#approachType').click({force: true});
        cy.wait(50);
        cy.contains('.ant-select-item-option-content', directionValue).click();     
        cy.get('#approachType').parents('.ant-select-selector').children('.ant-select-selection-item').should('contain', directionValue);
    })

    it('Пользователь кликает по полю Дата исполнения -> открывается дата пикер', function() {    
        cy.get('#completeDate').click();
        cy.get('.ant-picker-cell-in-view').eq(0).should('be.visible');       
    })

    it.skip('Пользователь заполняет значения в датапикере -> значения отображаются в датапикере', function() {    
        cy.get('#completeDate').click().type('12.02.2019');
        cy.get('#completeDate').parents('.ant-picker-range').find('[placeholder="Конечная дата"]').click().type('12.02.2021');
        cy.contains('.ant-btn-primary', 'Поиск').click();
        cy.get('#completeDate').should('contain', '12.02.2019');
        cy.get('#completeDate').parents('.ant-picker-range').find('[placeholder="Конечная дата"]').should('contain', '12.02.2021');
    })
    
    it('Пользователь кликает по чекбоксу Зафиксированные задачи -> Зафиксированные задачи выбран', function() {    
        cy.get('#fixedTasks').click();
        cy.get('#fixedTasks').parent('.ant-checkbox').should('have.class', 'ant-checkbox-checked');  
    })

    it('кнопка поиска', function() { 
        cy.get('#approachType').click({force: true});
        cy.wait(50);
        cy.contains('.ant-select-item-option-content', directionValue).click();
        cy.mockGetApproachListForSearchSearhed()
        cy.get('[data-icon="search"]').click();
        cy.wait(50);
        cy.get('.row__c2b7367').should('contain', directionValue);          
    })

    it('кнопка очистки', function() {  
        cy.get('#approachType').click({force: true});
        cy.wait(50);
        cy.contains('.ant-select-item-option-content', directionValue).click();     
        cy.get('[data-icon="clear"]').click(); 
        cy.get('#approachType').parents('.ant-select-selector').children('.ant-select-selection-item').should('be.empty'); 
    })

    it('кнопка сворачивание', function() {  
        cy.get('[data-icon="menu-unfold"]').click();
        cy.get('[data-icon="menu-unfold"]').should('not.exist') 
    })

    it('кнопка экспорт', function() {  
        cy.intercept('POST', `**/api/Approach/GetApproachListForSearch`).as('searchList');
        cy.intercept('POST', `**/GetSigns`).as('getSigns');
        cy.wait(['@searchList', '@getSigns']);
        cy.wait(50);
        cy.get('[data-icon="export"]').click(); 
        cy.contains('.title__4fc61d0','Настройка экспорта').should('contain', 'Настройка экспорта')
    })
})