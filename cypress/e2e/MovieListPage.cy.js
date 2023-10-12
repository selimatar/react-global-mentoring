describe('Movie List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('SearchForm', () => {
    it('should display the search form', () => {
      cy.get('.movie-list-page').should('exist');
    });

    it('should allow entering a search query', () => {
      cy.get('.search-input').type('Transformers');
      cy.get('.search-input').should('have.value', 'Transformers');
    });
  })

  describe('Sort Control', () => {
    it('should change the selection when a different sort control is chosen', () => {
      cy.get('select').select('title');
      cy.get('select').should('have.value', 'title');
    });
  });

  describe('GenreSelect', () => {
    const genreList = [
      { name: "All", id: 1 }, 
      { name: "Documentary", id: 2 }, 
      { name: "Comedy", id: 3 }, 
      { name: "Horror", id: 4 }
    ];
  
    it('should display the GenreSelect component', () => {
      cy.get('.tabs').should('exist');
      cy.get('.panels').should('exist');
    });
  
    it('should display genre tabs', () => {
      cy.get('.tab').should('have.length', genreList.length);
  
      genreList.forEach((genre, index) => {
        cy.get('.tab').eq(index).should('contain', genre.name);
      });
    });
  
    it('should mark the active genre tab as active', () => {
      cy.get('.tab').eq(0).click();
      cy.get('.tab.active').should('contain', genreList[0].name);
    });
  
    it('should display the active genre name in the panel', () => {
      cy.get('.tab').eq(1).click();
      cy.get('.panel.active p').should('contain', genreList[1].name);
    });
  });
  
})