import HomePage from '../POM/HomePage'
import CartPage from '../POM/CartPage'

describe('Purchasing products',() => {

    const homePage = new HomePage()
    const cartPage = new CartPage()


    beforeEach(() => {

        cy.fixture('testData').then((data) => {

            globalThis.data = data

        })


        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.url().should('includes', 'tutorialsninja')
    })


    it('Register new user',() => {

        cy.get('li.dropdown').eq(0).click()
        cy.get('ul.dropdown-menu-right li a').eq(0).click()

        cy.newUserDetails(
            "Raj", 
            "Singh", 
            "example90011@gmail.com", 
            "0736426843", 
            "epic")

        cy.get('input[name="agree"]').check().should('be.checked')
        cy.get('input.btn-primary').click()

        cy.url().should('includes', 'success')
        cy.get('div#content h1').should('have.text', 'Your Account Has Been Created!')


    })




    it('Purchasing a product', () => {


        globalThis.data.products.forEach((el) => {

            cy.selectProduct(el)

        })

        cy.get('div.product-layout').should('have.length', 4)


        cy.get('div.alert').then((el) => {

            const successMessage = el.text()
            expect(successMessage.includes('Success')).to.be.true

        })

        cy.wait(3000)


        homePage.getCartButton().click()
        homePage.getViewCart().click()


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


        cartPage.getCheckoutButton().should('have.text', 'Checkout').click()

        cy.get('input[name="email"]').type(globalThis.data.email)
        cy.get('input[name="password"]').type(globalThis.data.password)

        cy.get('input[value="Login"]').click()




    })







})