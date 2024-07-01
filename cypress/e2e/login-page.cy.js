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
    cy.get('input[id="username"]').type('testusers');
    cy.get('input[id="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/user/testusers');
  });

  // check banner if username or password is empty
  it('submit button is disabled during form submission', () => {
    cy.get('input[id="username"]').type('testusers');
    cy.get('input[id="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
