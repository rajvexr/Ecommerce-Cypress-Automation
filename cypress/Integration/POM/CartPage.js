class CartPage{

    getCheckoutButton(){
        return cy.get('div.pull-right a.btn')
    }


}

export default CartPage;

