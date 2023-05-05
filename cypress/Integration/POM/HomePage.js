class HomePage {

    elements = {

        cartButton: () => cy.get('div#cart button').eq(0),
        viewCart: () => cy.get('p.text-right a strong').eq(0)

    }

    getCartButton(){
        this.elements.cartButton().click()
        return this
    }

    getViewCart(){
        this.elements.viewCart().click()
        return this
    }


}

export default new HomePage();