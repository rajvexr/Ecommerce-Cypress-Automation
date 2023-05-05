const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/e2e/*js',
    projectId: "2viuzk",
    screenshotsFolder: 'cypress/failure/screenshots',


  },
});


// npx cypress run --record --key 3ea0472a-12f9-4d49-b826-6c62ad99e7d0