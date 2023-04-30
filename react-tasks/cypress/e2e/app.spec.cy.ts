const testText = 'Gaga';

describe('test home page', () => {
  it('opens page and load data', () => {
    cy.visit('/');
    cy.get('.card');
  });

  it('input search text, click Search and load data', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.search__input').type(testText);
    cy.get('.search__input').should('have.value', testText);

    cy.contains('Search').click();
    cy.get('.card').contains(testText);
  });
  it('goes to about page', () => {
    cy.visit('/');
    cy.get('.nav__nav-link').contains('About').click();
    cy.url().should('include', 'about');
  });
  it('clicks on card', () => {
    cy.visit('/');
    cy.get('.card').first().click();
    cy.get('.full-card');
  });
  it('clicks on New Card', () => {
    cy.visit('/');
    cy.get('.nav__nav-link').contains('card').click();
    cy.url().should('include', 'form');
  });
});

describe('test new form page', () => {
  it('test form not filled', () => {
    cy.visit('/form');
    cy.contains('Submit').click();
    cy.contains('Enter the name');
    cy.contains('Enter the birthday');
    cy.contains('Enter file');
  });
  it('test form correctly filled', () => {
    cy.visit('/form');
    cy.get('input[type="text"]').type(testText);
    cy.get('input[type="date"]').type('2022-10-11');
    cy.get('input[type="file"').selectFile('public/img/abisinskaya-3.jpg');
    cy.contains('Submit').click();
    cy.contains('Enter the name').should('not.exist');
    cy.contains('Enter the birthday').should('not.exist');
    cy.contains('Enter file').should('not.exist');
    cy.get('.card').contains(testText);
  });
});
