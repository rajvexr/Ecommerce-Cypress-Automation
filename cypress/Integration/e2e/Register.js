import RegisterPage from '../POM/RegisterPage'
import data from '../../fixtures/testData.json'
import 'cypress-v10-preserve-cookie'



describe('Registering a user' , () => {

    beforeEach(() => {

        cy.visit('/index.php?route=account/register')
        cy.fixture('testData.json').as('data')

    })


    it('User already exists',() => {


        cy.url().should('includes', 'register')

        cy.userDetails()

        RegisterPage.AgreedPolicy('be.checked')
        RegisterPage.getSubmitRegister()

        RegisterPage.verifyAlreadyRegisteredAlert('Warning: E-Mail Address is already registered!')

    })



    it('New user registered',() => {

        cy.newUserDetails(
            "Raj", 
            "Singh", 
            "example2@gmail.com", 
            "0736426843", 
            "epic")

        RegisterPage.AgreedPolicy('be.checked')
        RegisterPage.getSubmitRegister()

        cy.url().should('includes', 'success')
        RegisterPage.verifyRegisteredUser('Your Account Has Been Created!')


    })





})