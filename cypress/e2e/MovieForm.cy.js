describe('Movie Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Navigates to "Add Movie" and opens an empty movie form', () => {
        cy.contains('Add Movie').click();
        cy.get('.movie-title-input').should('be.empty').should('be.visible');
    });

    it('Opens a dialog with pre-populated movie details when selecting "Edit" from context menu', () => {
        cy.get('.movie-context-menu-button').first().click();
        cy.contains('Edit').click();
        cy.contains('Edit Movie');
    });
})