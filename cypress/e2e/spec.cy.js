describe('Visit Staging BalkanTransfer', () => {
  it('should load the BalkanTransfer staging homepage', () => {
    cy.visit('/');  // Using relative path because baseUrl is already set
    cy.get('h1').should('be.visible');  // Example: Check if the header is visible
  });
});