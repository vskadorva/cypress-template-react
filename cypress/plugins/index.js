/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs-extra')
const path = require('path')
const {pa11y} = require("@cypress-audit/pa11y")

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    if(!fs.existsSync(pathToConfigFile)){
        return {};
    }

    return fs.readJson(pathToConfigFile)
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
            return launchOptions
        }
    })
    on('task', {
        pa11y : pa11y(console.log.bind(console)),
        log(message) {
            console.log(message)
            return null
        },
        table(message) {
            console.table(message)
            return null
        }
    })
    const file = config.env.configFile || '.qa'

    return getConfigurationByFile(file)
}
