
Cypress.Commands.add('vSelect', (selector, option) => {
  cy.get(selector).parent().click();
  cy.wait(500);
  cy.waitFor('.v-menu__content');
  cy.get('.v-menu__content').contains(option).click();
});
Cypress.Commands.add('vAttachFile', (selector, filePath) => {
  cy.get(selector).find('input').attachFile(filePath);
});
Cypress.Commands.add('vTimerSelect', (selector, hourNumber, minuteNumber, pm) => {
  cy.get(selector).click();
  cy.get('.v-time-picker-clock__item').eq(hourNumber).click();
  cy.wait(550);
  cy.get('.v-time-picker-clock__item').eq(minuteNumber).click();
  if (pm) {
    cy.get('.v-time-picker-clock__ampm.primary--text > div:nth-child(2)').click();
  }
  cy.get('[data-cy=TimeField-Ok]').click();
});
