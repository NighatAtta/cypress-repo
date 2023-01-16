import {v4 as uuidv4} from 'uuid';
const TESTDATA = require('../../fixtures/userCredentials.json')


describe('My first api test', () => {
let myuuid = uuidv4();

it('getting access token', function() {
    cy.request('POST', 'https://qaapi.quantified.ai/api/token', {
    email: TESTDATA.email,
    grant_type: TESTDATA.grant_type,
    impersonating_user_id: TESTDATA.impersonating_user_id,
    password: TESTDATA.password
   }
    ).then(
        (response) => {
         expect(response.status).to.eq(200) 
          cy.writeFile('cypress/fixtures/token.json', {"token": "Bearer " + response.body.access_token})
        }
      )
      
})

it('start workflow', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "start dialogflow",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Main menu")
})
}
})
})

it('Lets practice', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "Let's practice",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Let's practice")
})
}
})
})


it('Objection handling', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "Objection handling",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Practice objection handling")
})
}
})
})

it('Arrange objections call with Laura', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "Laura",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Arrange objections call with Laura")
})
}
})
})

it('Laura objections', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "Start the call",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Laura objections")
})
}
})
})

it('Could you answer a few things', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "sounds good Laura",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Could you answer a few things")
})
}
})
})

it('Status quo', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "yes I'd love to what are your questions",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Status quo")
})
}
})
})

it('Price', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "well Laura without investment in your infrastructure you'll continue to do things the way that you've always done and with papers and spreadsheets and missile those opportunities really Elevate the organization that you're trying to build and up level your team",
            questionId: 1,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Price")
})
}
})
})

it('Deployment', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "yes Laura we understand the budget is always a concern and we're happy to work with you on pricing plans that work best for you we do have a pricing model that scales up for volume so the more people that are going to be using this application the cheaper it's going to be per seat",
            questionId: 2,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Deployment")
})
}
})
})

it('Regular use', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "I'm glad you asked about that Laura training and adoption can always be a huge concern that's why we have invested a lot of time and energy and building our white label solution that allows you to put your own logos and your own branding on top of our instructional material and distributed across your entire organization we also do concierge training to kick off your HR team and support your management",
            questionId: 3,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Regular use")
})
}
})
})

it('Goodbye', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "I understand if you've invested in other infrastructure before and didn't see the realization of your investment that can be very challenging and I promise you that once your management and HR teams start using this application they're not going to want to go back to Excel and other other solution opportunities other solution opportunities other solution opportunities",
            questionId: 4,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("Goodbye")
})
}
})
})

it('After practice', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "hang up practice",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("After practice")
})
}
})
})
it('Show my results', function() {
    
    cy.fixture('token.json').then(function(token){
        this.token=token
    {
    
    cy.request({
        method: 'POST',
        url: 'https://dialogservice-qa.quantified.ai/',
        body: {
            agentId: "ae5208ef-040a-493b-aa90-51a7831aa3fe",
            projectId: "quantified-p1",
            queryText: "Show my results",
            questionId: 0,
            sessionId: myuuid,
            setDefault: false
        },
        headers: {
            authorization : this.token.token
        }

    
})
.then(
(response) => {
    expect(response.status).to.eq(200) 
    console.log(response) 
    expect(response.body.page).to.eq("After practice")
})
}
})
})


})