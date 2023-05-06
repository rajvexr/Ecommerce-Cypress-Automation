class HomePage {

    elements = {

        cartButton: () => cy.get('div#cart button').eq(0),
        viewCart: () => cy.get('p.text-right a strong').eq(0),
        productNumber: () => cy.get('div.product-layout'),
        addedToCartSuccessMSG: () =>  cy.get('div.alert'),

    }

    getCartButton(){
        this.elements.cartButton().click()
        return this
    }

    getViewCart(){
        this.elements.viewCart().click()
        return this
    }

    getProductNumber(numberOfProducts) {
        this.elements.productNumber().should('have.length', numberOfProducts)
        return this
    }

    addedToCartMSG(successMSG){
        this.elements.addedToCartSuccessMSG().then((el) => {

            const successMessage = el.text()
            expect(successMessage.includes(successMSG)).to.be.true

        })

    }


}

export default new HomePage();