import HomePage from '../POM/HomePage'
import CartPage from '../POM/CartPage'
import data from '../../fixtures/testData.json'

describe('Purchasing products',() => {


    beforeEach(() => {

        cy.fixture('testData.json').as('data')

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.url().should('includes', 'tutorialsninja')
    })



    it('Purchasing a product', () => {


        // data.products.forEach((el) => {

        //     cy.selectProducts(el)

        // })

        cy.selectMultipleProducts()

        HomePage.getProductNumber('4')
        HomePage.addedToCartMSG('Success')
        HomePage.getCartButton()
        HomePage.getViewCart()

        cy.VerifyCartTotalPrice()

        CartPage.getCheckoutButton()

        cy.login(data.email[0], data.password[0])

    })







})