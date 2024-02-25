const {defineConfig} = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
