describe('template spec', () => {
  it('autofinish', () => {
    cy.visit('');
    for (let i = 1; i < 51; i++) {
      cy.get('.grid > div').contains(new RegExp(`^${i}$`)).click({ force: true });
    }
  });
});
