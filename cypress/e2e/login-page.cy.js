describe("LoginPage", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("displays the login form", () => {
        cy.get("h2").should("contain", "Log in");
        cy.get("h3").should("contain", "to start shopping");
        cy.get("form").should("exist");
    });

    it("allows user to enter username and password", () => {
        cy.get('input[id="username"]').type("testuser");
        cy.get('input[id="password"]').type("testpassword");
        cy.get('input[id="username"]').should("have.value", "testuser");
        cy.get('input[id="password"]').should("have.value", "testpassword");
    });

    it("submits the form when login button is clicked", () => {
        cy.get('input[id="username"]').type("testuser");
        cy.get('input[id="password"]').type("testpassword");
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/testuser");
    });

    //check banner if username or password is empty
    it("displays banner if username or password is empty", () => {
        cy.get('button[type="submit"]').click();
        cy.get('[data-cy = "banner"]').should("exist");
    });
});