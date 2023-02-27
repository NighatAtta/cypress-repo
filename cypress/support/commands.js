
//function to generate token


Cypress.Commands.add('generateToken', () => {

    cy.fixture('userCredentials.json').then((TESTDATA) => {
    cy.request('POST', Cypress.env('tokenAPIURL'), {
            email: Cypress.env('email'),
            grant_type: Cypress.env('grant_type'),
            impersonating_user_id: Cypress.env('impersonating_user_id'),
            password: Cypress.env('password')
        }
        ).then(
            (response) => {
                expect(response.status).to.eq(200)
                const token = "Bearer " + response.body.access_token
                return token
            })
        })

})

//function to call simulation API
Cypress.Commands.add('simulationAPI', (queryText, questionId, sessionId, token)=> {

    cy.request({
        method: 'POST',
        url: Cypress.env('simulationAPIURL'),
        body: {
            agentId: Cypress.env('agentId'),
            projectId: Cypress.env('ProjectId'),
            queryText: queryText,
            questionId: questionId,
            sessionId: sessionId,
            setDefault: false,
            simulatorEnvId: Cypress.env('QAsimulatorEnvId')
        },
        headers: {
            authorization: token
        }
    })
})
//To verify response for simulation API's calls
Cypress.Commands.add('verifyResponse', (response, pageName) => {
    {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        expect(response.body.page).to.eq(pageName)

    }
})