describe('Odyssey authentication tests', () => {

    let credentials = require('../../fixtures/credentials')
    beforeEach(() => {
        cy.visit('https://login.wildcodeschool.com/')
    });
    
    it.only('should fail authentication on wrong credentials', () => {
        cy.login(credentials[0].username,  credentials[0].password)
        if(!credentials.isCorrect) 
            cy.contains('Votre adresse email et/ou votre mot de passe sont incorrects')
            .should('be.visible')
        
    })

    it.only('should fail when password is empty', () => {
        cy.login(credentials[1].username,  credentials[1].password)
        if(!credentials.isCorrect)
            cy.contains('Merci de renseigner un mot de passe').should('be.visible')
    })

    it('should fail when email is empty', () => {
        cy.login(null, 'wrongPassword')
        cy.contains('Merci de renseigner votre adresse email')
            .should('be.visible')
    })

    it('should fail when email has invalid format', () => {
        cy.login('mohammed.aliodeschool.com', 'wrongPassword')
        cy.contains('Votre adresse email est invalide')
            .should('be.visible')
    })

     it('should authenticate successfully', () => {
        cy.login('tonadressemail@wildcodeschool.com', 'tonmotdepasse')
        cy.wait(4000)
        cy.visit('https://argo.wildcodeschool.com/admin/quests')
        cy.url().should('contain', '/admin/quests')

    })

})