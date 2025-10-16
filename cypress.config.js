const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const os = require('os');

module.exports = defineConfig({
  downloadsFolder: 'cypress/downloads',
  e2e: {
    specPattern: "cypress/e2e/*.js",
    blockHosts: [
      '*.cloudflare.com',
      '*cloudflareinsights.com',
      '*.cdn-cgi.com',
    ],
    "chromeWebSecurity": false,
    hideXHR: true,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      on('task', {
        getFiles(folderPath) {
          return fs.readdirSync(folderPath);
        },
      });
      on('task', {
        getFilesFromFolder(folderPath) {
          const fullPath = path.join(__dirname, '..', folderPath);
          return fs.readdirSync(fullPath);
        },
      });
      on('task', {
        readdir(folderPath) {
          return fs.readdirSync(folderPath);
        },
      });
    },
  },
});
