
//const TESTDATA = require('../../fixtures/userCredentials.json')
Cypress.Commands.add('generateToken', () => {

    cy.fixture('userCredentials.json').then((TESTDATA) => {
    cy.request('POST', 'https://qaapi.quantified.ai/api/token', {
            email: TESTDATA.email,
            grant_type: TESTDATA.grant_type,
            impersonating_user_id: TESTDATA.impersonating_user_id,
            password: TESTDATA.password
        }
        ).then(
            (response) => {
                expect(response.status).to.eq(200)
                const token = "Bearer " + response.body.access_token
                return token
            })
        })

})