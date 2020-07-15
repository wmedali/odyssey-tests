Cypress.Commands.add('login', (email, password) => {

    if (email != undefined) {
        cy.get('#login-email')
            .type(email)
            .should('have.value', email)
    }

    if (password != undefined) {
        cy.get('#login-password')
            .type(password)
            .should('have.value', password)
    }

    cy.get('#login-submit').click()
})