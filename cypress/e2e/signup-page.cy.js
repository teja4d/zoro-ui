describe("SignupPage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signup");
    });

    it("displays the signup form", () => {
        cy.get(".text-4xl").should("contain", "Sign up");
        cy.get(".text-3xl").should("contain", "to start shopping");
        cy.get("form").should("exist");
    });

    it("allows user to fill in the signup form", () => {
        cy.get('input[id="emailname"]').type("test@example.com");
        cy.get('input[id="password"]').type("password123");
        cy.get('input[id="password2"]').type("password123");
        cy.get('button[type="submit"]').click();
    });

    it("displays banner if username or password is empty", () => {
        cy.get('button[type="submit"]').click();
        cy.get('[data-cy = "banner"]').should("exist");
    });

    it("displays banner if password and confirm password do not match", () => {
        cy.get('input[id="emailname"]').type("test@example.com")
        cy.get('input[id="password"]').type("password123");
        cy.get('input[id="password2"]').type("password1234");
        cy.get('button[type="submit"]').click();
        cy.get('[data-cy = "banner"]').should("exist");
    }
    );

    it("redirects to login page", () => {
        cy.get('a[href="/login"]').click();
        cy.url().should("include", "/login");
    });

});