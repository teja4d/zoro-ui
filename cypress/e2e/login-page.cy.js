describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the login form', () => {
    cy.get('h2').should('contain', 'Login');
    cy.get('h3').should('contain', 'to start shopping');
    cy.get('form').should('exist');
  });

  it('allows user to enter username and password', () => {
    cy.get('input[id="username"]').type('testuser');
    cy.get('input[id="password"]').type('testpassword');
    cy.get('input[id="username"]').should('have.value', 'testuser');
    cy.get('input[id="password"]').should('have.value', 'testpassword');
  });

  it('submits the form when login button is clicked', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('CryptoKey is not defined')) {
        // Log the error for debugging purposes
        console.error('Caught CryptoKey is not defined error:', err);
        
        // Return false to prevent Cypress from failing the test
        return false;
      }
      // Let other errors fail the test
      return true;
    });
    cy.get('input[id="username"]').type('testusers');
    cy.get('input[id="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/user/testusers');
  });

  // check banner if username or password is empty
  it('submit button is disabled if username or password is empty', () => {
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
