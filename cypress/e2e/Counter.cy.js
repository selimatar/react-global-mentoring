describe('Counter component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders counter component', () => {
    cy.contains('0').should('be.visible');
  });

  it('clicking on +1 button increments counter', () => {
    cy.contains('+1').click();
    cy.contains('1').should('be.visible');
  });

  it('clicking on -1 button decrements counter', () => {
    cy.contains('-1').click();
    cy.contains('-1').should('be.visible');
  });
});