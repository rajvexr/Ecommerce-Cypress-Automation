


describe('Registering a user' , () => {

    beforeEach(() => {

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.url().should('includes', 'tutorialsninja')

    })



    it('User already exists',() => {

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

        cy.get('div.alert-danger').then((el) => {

            const errorText = el.text()
            expect(errorText).to.equal('Warning: E-Mail Address is already registered!')

        })
        // cy.url().should('includes', 'success')
        // cy.get('div#content h1').should('have.text', 'Your Account Has Been Created!')


    })





})