class HomePage {

    getCartButton(){
        return cy.get('div#cart button').eq(0)
    }

    getViewCart(){
        return cy.get('p.text-right a strong').eq(0)
    }


}

export default HomePage;