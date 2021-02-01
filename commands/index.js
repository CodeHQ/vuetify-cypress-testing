
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
Cypress.Commands.add('responsiveScreenShots', (name) => {
  const viewPorts = [
    'ipad-2',
    'ipad-mini',
    'iphone-3',
    'iphone-4',
    'iphone-5',
    'iphone-6',
    'iphone-6+',
    'iphone-7',
    'iphone-8',
    'iphone-x',
    'iphone-xr',
    'iphone-se2',
    'macbook-11',
    'macbook-13',
    'macbook-15',
    'macbook-16',
    'samsung-note9',
    'samsung-s10',
  ];
  viewPorts.forEach((viewPort) => {
    cy.viewport(viewPort);
    cy.screenshot(`${name}-${viewPort}`);
  });
  cy.viewport(1000, 600);
});
