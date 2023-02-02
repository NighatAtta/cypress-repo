const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
   env: {
    "simulationAPI": "https://dialogservice-qa.quantified.ai/",
    "agentId" : "ae5208ef-040a-493b-aa90-51a7831aa3fe",
    "QAsimulatorEnvId": "7811b5ae-8073-43a5-be6c-47049ce8eee4",
    "ProjectId" : "quantified-p1"
   }
  },
});