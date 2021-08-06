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
Cypress.Commands.add("createContacts", () => {
  cy.request({
    method: "POST",
    url: "https://qa5.digisac.co/api/v1/contacts",
    body: {
      name: "Cypress_teste",
    },
  }).then((response) => {
    expect(response.body.data).is.not.null;
    cy.log(response.body.data);

    Cypress.env("createContacts", response.body.data);
  });
});

Cypress.Commands.add("logon", () => {
  cy.request({
    method: "POST",
    url: "https://qa5.digisac.co/",
    body: {
      name: "admin@teste.com",
      password: "123456",
    },
  }).then((response) => {
    expect(response.body.data).is.not.null;
    cy.log(response.body.data);

    Cypress.env("logon", response.body.data);
  });
});
