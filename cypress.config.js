const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automatedtests.stg.monument.io/login",
    setupNodeEvents(on, config) {  
          
    },
    env: {
      email: "bragafernando317@gmail.com",
      password: "Ihz1&MHh2"
    },
  },
});
