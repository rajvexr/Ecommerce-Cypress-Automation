// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectProduct', (productName) => {  

    cy.get('div.product-layout').each((el, index, list) => {

        const techProduct = el.find('div.caption h4').text()
    
        if(techProduct.includes(productName)){
    
            cy.get('div.button-group button:nth-child(1)').eq(index).click()
    
        }
    
    })

})


Cypress.Commands.add('userDetails', () => {  

cy.get('div.form-group').eq(1).type(globalThis.data.firstName)
cy.get('div.form-group').eq(2).type(globalThis.data.lastName)
cy.get('div.form-group').eq(3).type(globalThis.data.email)
cy.get('div.form-group').eq(4).type(globalThis.data.telephone)
cy.get('div.form-group').eq(5).type(globalThis.data.password)
cy.get('div.form-group').eq(6).type(globalThis.data.password)

})


Cypress.Commands.add('newUserDetails', (firstName, lastName, email, telephone, password) => {  

    cy.get('div.form-group').eq(1).type(firstName)
    cy.get('div.form-group').eq(2).type(lastName)
    cy.get('div.form-group').eq(3).type(email)
    cy.get('div.form-group').eq(4).type(telephone)
    cy.get('div.form-group').eq(5).type(password)
    cy.get('div.form-group').eq(6).type(password)
    
})