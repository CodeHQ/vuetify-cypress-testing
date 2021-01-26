
Cypress.Commands.add('vSelect', (selector, option) => {
  cy.get(selector).parent().click();
  cy.wait(500);
  cy.waitFor('.v-menu__content');
  cy.get('.v-menu__content').contains(option).click();
});
Cypress.Commands.add('vAttachFile', (selector, filePath) => {
  cy.get(selector).find('input').attachFile(filePath);
});