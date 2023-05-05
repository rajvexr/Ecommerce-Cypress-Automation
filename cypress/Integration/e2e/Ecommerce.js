import HomePage from '../POM/HomePage'
import CartPage from '../POM/CartPage'
import data from '../../fixtures/testData.json'

describe('Purchasing products',() => {

    const cartPage = new CartPage()


    beforeEach(() => {

        cy.fixture('testData.json').as('data')

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.url().should('includes', 'tutorialsninja')
    })




    it('Purchasing a product', () => {


        data.products.forEach((el) => {

            cy.selectProduct(el)

        })

        cy.get('div.product-layout').should('have.length', 4)


        cy.get('div.alert').then((el) => {

            const successMessage = el.text()
            expect(successMessage.includes('Success')).to.be.true

        })

        cy.wait(3000)


        HomePage.getCartButton()
        HomePage.getViewCart()


        let sum = 0

        cy.get('tbody tr td.text-right:nth-child(6)').each((el, indexed, list) => {


            const priceText = el.text()
            // cy.log(priceText) 

            let price = priceText.substring(1)
            // cy.log(price)

            sum+=Number(price)


        }).then(() => {
            cy.log(sum)
        })

        cy.get('table.table-bordered tr td.text-right:nth-child(2)').eq(7).then((el) => {

            const totalPriceText = el.text()
            const totalPrice = totalPriceText.substring(1)
            expect(Number(totalPrice)).to.equal(sum)

        })


        CartPage.getCheckoutButton().should('have.text', 'Checkout')
        
        cy.get('input[name="email"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)

        cy.get('input[value="Login"]').click()




    })







})