class RegisterPage {

    elements = {

        agreePolicy: () => cy.get('input[name="agree"]'),
        submit: () => cy.get('input.btn-primary'),
        alreadyRegisteredAlert: () => cy.get('div.alert-danger'),
        successRegister: () => cy.get('div#content h1')
    }


    AgreedPolicy(checked) {
        this.elements.agreePolicy().check().should(checked)
        return this
    }


    getSubmitRegister() {
        this.elements.submit().click()
    }

    verifyAlreadyRegisteredAlert(alertText) {
        this.elements.alreadyRegisteredAlert().then((el) => {

            const errorText = el.text()
            expect(errorText).to.equal(alertText)

        })
    }

    verifyRegisteredUser(successText) {
        this.elements.successRegister().should('have.text', successText)
    }




}

export default new RegisterPage();