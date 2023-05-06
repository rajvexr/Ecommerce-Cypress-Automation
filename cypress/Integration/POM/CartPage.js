class CartPage{

    elements = {

        checkoutButton: () => cy.get('div.pull-right a.btn').should('have.text', 'Checkout'),

    }


    getCheckoutButton(){

        this.elements.checkoutButton().click()
        return this
    }



}

export default new CartPage();

