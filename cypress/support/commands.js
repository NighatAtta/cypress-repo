
//Global function to generate token

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

//Global function to call simulation API
Cypress.Commands.add('simulationAPI', (queryText, questionId, sessionId, token)=> {

    cy.request({
        method: 'POST',
        url: Cypress.env('simulationAPI'),
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