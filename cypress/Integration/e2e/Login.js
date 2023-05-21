import validData from '../../fixtures/validUsers.json'
import invalidData from '../../fixtures/invalidUsers.json'
import LoginPage from '../POM/LoginPage'

describe('Login Test Suit', () => {

beforeEach(() => {

    cy.visit('/index.php?route=account/login')
    cy.url().should('contains', 'login')
    cy.fixture('validUsers.json').as('validData')
    cy.fixture('invalidUsers.json').as('invalidData')
})


it('Positive Test', () => {
    cy.loginInfo(validData[0].email, validData[0].password)
    cy.url().should('contains', 'account')
})


it('Negative Test', () => {
    cy.loginInfo(invalidData[0].email, invalidData[0].password)
    cy.url().should('contains', 'login')
    LoginPage.getInvalidMSG('Warning: No match for E-Mail Address and/or Password.')
})













})