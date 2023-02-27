const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

module.exports = defineConfig({   
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here previously plugins/index.js
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
   
   env: {

    "email": "nighat.atta1@outlook.com",
    "grant_type": "password",
    "impersonating_user_id": null,
    "password": "yell0wyucc@",
    "simulationAPIURL": "https://dialogservice-qa.quantified.ai/",
    "agentId" : "ae5208ef-040a-493b-aa90-51a7831aa3fe",
    "QAsimulatorEnvId": "7811b5ae-8073-43a5-be6c-47049ce8eee4",
    "ProjectId" : "quantified-p1",
    "tokenAPIURL" : "https://qaapi.quantified.ai/api/token"
   },
},
});

