/// <reference types="cypress" />

//api

Cypress.Commands.add('openCrm', (url) => {
  cy.visit(`${url}`, {login:'crm', password: 'pntcnjdsq@cntyl'})
})

Cypress.Commands.add('loginByIp', (url) => {
  cy.request({
    url:  '/api/Desktop/SignIn',
    method: 'POST',
    headers: {'accept': "application/json",
    'accept-encoding': "gzip, deflate",
    'accept-language': "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    'content-length': "43",
    'content-type': "application/json",
    'host': "176.119.157.192:8192",
    'origin': "http://176.119.157.192:8192",
    'proxy-connection': "keep-alive",
    'referer': "http://176.119.157.192:8192/auth"},
    body: {
        login: "crm",
        password: "ntcnjdsq@cntyl"
    }
  }).then(res => {
    expect(res.status).to.eq(200)
  })
  cy.visit(`${url}`, {login:'crm', password: 'pntcnjdsq@cntyl'})
})


