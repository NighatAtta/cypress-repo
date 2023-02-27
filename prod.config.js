const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
   
   env: {

    "email": "nighat.atta1@outlook.com",
    "grant_type": "password",
    "impersonating_user_id": null,
    "password": "rosyb@rb9",
    "simulationAPIURL": "https://dialogservice-prod.quantified.ai/",
    "agentId" : "ae5208ef-040a-493b-aa90-51a7831aa3fe",
    "QAsimulatorEnvId": "71a993d9-191e-4386-ada9-3141a7ec4ea4",
    "ProjectId" : "quantified-p1",
    "tokenAPIURL" : "https://api.quantified.ai/api/token"
},
  }
});














