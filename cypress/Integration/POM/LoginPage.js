class LoginPage {

    elements = {

        email: () => cy.get('input[name="email"]'),
        password: () => cy.get('input[name="password"]'),
        submit: () => cy.get('input[value="Login"]'),
    }

    getEmail(email){
        this.elements.email().type(email)
        return this
    }

    getPassword(password){
        this.elements.password().type(password)
        return this
    }

    getSubmit(){
        this.elements.submit().click()
        return this
    }




}


export default new LoginPage();