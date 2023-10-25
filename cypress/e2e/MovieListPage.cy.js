describe('Movie List Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('SearchForm', () => {
    it('should display the search form', () => {
      cy.get('.search-input').should('exist');
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
  
    //these are commented because of the changing structre of the genreSelect component
    // it('should mark the active genre tab as active', () => {
    //   cy.get('.tab').eq(0).click();
    //   cy.get('.tab.active').should('contain', genreList[0].name);
    // });
  
    // it('should display the active genre name in the panel', () => {
    //   cy.get('.tab').eq(1).click();
    //   cy.get('.panel.active p').should('contain', genreList[1].name);
    // });
  });
  
  describe('Roting cases', () => {
    it('Should display a search form and a list of movies on the homepage', () => {
      cy.get('.search-form').should('be.visible');
      cy.get('.movie-list-container').should('be.visible');
    });

    it('Should update the URL and refresh the movie list after searching', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.search-input').type('Star Wars');
      cy.get('.search-button').click();
      cy.url().should('include', '&searchQuery=Star+Wars');
      cy.get('.movie-list-container').should('contain', 'Star Wars');
    });

    it('Should display the search form with "abc" and relevant movie list', () => {
      cy.visit('http://localhost:3000/?searchQuery=abc');
      cy.get('.search-input').should('have.value', 'abc');
      cy.get('.movie-list-container').should('contain', '');
    });

    it('Should update URL when clicking on a movie while preserving query parameters', () => {
      cy.visit('http://localhost:3000/?searchQuery=Star+Wars&activeGenre=All');
      
      let initialURL;
      cy.url().then((url) => {
        initialURL = url;
      });
    
      cy.contains('.movie-name', 'Star Wars: The Last Jedi').click({ force: true });
      cy.url().should('not.equal', initialURL);
    
      cy.url().should('include', 'searchQuery=Star+Wars');
      cy.url().should('include', 'activeGenre=All');
      cy.url().should('include', 'sortCriterion=release_date');
      
      cy.get('.movie-list-container').should('be.visible');
    });
  })

})