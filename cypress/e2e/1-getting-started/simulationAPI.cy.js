import { v4 as uuidv4 } from 'uuid';

describe('Testing Simulation APIs', () => {
    let myuuid = uuidv4();

    it('TestCase01-Simulation API Flow', function () {

            cy.generateToken()
            .then((token) => {
                cy.simulationAPI("start dialogflow", 0, myuuid, token)
                    .then(
                        (response) => {cy.verifyResponse(response,"Main menu")}
                        )

                        cy.simulationAPI("Let's practice", 0, myuuid, token)
                    .then(
                        (response) => {cy.verifyResponse(response,"Let's practice")}
                        )

                        cy.simulationAPI("Objection handling", 0, myuuid, token)
                    .then(
                        (response) => {cy.verifyResponse(response,"Practice objection handling")}
                        )

                        cy.simulationAPI("Laura", 0, myuuid, token)
                    .then(
                        (response) => {cy.verifyResponse(response,"Arrange objections call with Laura")}
                        )

                        cy.simulationAPI("Start the call", 0, myuuid, token)
                    .then(
                        (response) => {cy.verifyResponse(response,"Laura objections")}
                        )
                
                        cy.simulationAPI("sounds good Laura", 0, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Could you answer a few things")}
                        )
                
                        cy.simulationAPI("yes I'd love to what are your questions", 0, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Status quo")}
                        )
                        
                        cy.simulationAPI("well Laura without investment in your infrastructure you'll continue to do things the way that you've always done and with papers and spreadsheets and missile those opportunities really Elevate the organization that you're trying to build and up level your team", 1, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Price")}
                        )

                        cy.simulationAPI("yes Laura we understand the budget is always a concern and we're happy to work with you on pricing plans that work best for you we do have a pricing model that scales up for volume so the more people that are going to be using this application the cheaper it's going to be per seat", 2, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Deployment")}
                        )
                        cy.simulationAPI("I'm glad you asked about that Laura training and adoption can always be a huge concern that's why we have invested a lot of time and energy and building our white label solution that allows you to put your own logos and your own branding on top of our instructional material and distributed across your entire organization we also do concierge training to kick off your HR team and support your management", 3, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Regular use")}
                        )

                        cy.simulationAPI("I understand if you've invested in other infrastructure before and didn't see the realization of your investment that can be very challenging and I promise you that once your management and HR teams start using this application they're not going to want to go back to Excel and other other solution opportunities other solution opportunities other solution opportunities", 4, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"Goodbye")}
                        )
                        cy.simulationAPI("hang up practice", 0, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"After practice")}
                        )
                        cy.simulationAPI("Show my results", 0, myuuid, token)
                    .then(
                            (response) => {cy.verifyResponse(response,"After practice")}
                        )
            })
    })
})