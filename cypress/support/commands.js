// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @memberof cy
 * @method fillMandatoryFieldsandSubmit
 */
Cypress.Commands.add('fillMandatoryFieldsandSubmit', (
    firstName,
    lastName,
    email,
    phone,
    message,
    product,
    typeService,
    preferredContactMethod,
    file
) => {
    cy.get("#firstName").type(firstName, {delay: 0})
    cy.get("#lastName").type(lastName, {delay: 0})
    cy.get("#email").type(email, {delay: 0})
    cy.get("#phone").type(phone, {delay: 0})
    cy.get('#product').select(product)
    cy.get('#support-type').contains('label', typeService).click()
    cy.get("#open-text-area").type(message, {delay: 0})
    cy.get("div #check").contains('label', preferredContactMethod).prev().check()
    cy.get("#file-upload").selectFile(file, {action: "drag-drop"})
    cy.contains("button", "Enviar").click()
})