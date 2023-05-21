class LoginPage {

    elements = {

        email: () => cy.get('input[name="email"]'),
        password: () => cy.get('input[name="password"]'),
        submit: () => cy.get('input[value="Login"]'),
        warningMSG: () => cy.get('.alert')

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

    getInvalidMSG(invalidMSG){
        this.elements.warningMSG().then((el) => {

            const warningMessage = el.text()
            expect(warningMessage.includes(invalidMSG)).to.be.true
    
        })
    }




}


export default new LoginPage();