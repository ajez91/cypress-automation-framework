const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'svqw5t',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/integration/{**,**/**}/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/{integration,e2e}/other/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://webdriveruniversity.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
        runMode: 0,
        openMode: 1
    },
    env: {
      first_name: "QAEngineer",
      last_name: "Automation",
      webdriveruni_homepage: "https://webdriveruniversity.com/"
    }
  },
});