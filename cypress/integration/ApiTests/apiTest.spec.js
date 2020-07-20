describe('ReqRes API tests', () => {


    it(`create a user`, () => {
        cy.fixture('users').as('users').then(users => {
            users.forEach(user => {
                cy.request({
                    url: 'https://reqres.in/api/users',
                    method: 'POST',
                    body: {
                        "name": user.name,
                        "job": user.job
                    }
                }).then(response => {
                    expect(response.status).to.be.ok
                    cy.log(response.status)
                    cy.log(response.body)
                })
            })

        })

    })

})