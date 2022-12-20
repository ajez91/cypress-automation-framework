import HomePage from "../../support/pageObjects/webdriver-uni/Homepage"
import ContactUsPage from "../../support/pageObjects/webdriver-uni/ContactUsPage"

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const contactUsPage = new ContactUsPage()
    
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data
            globalThis.data = data //could be used instead of
        })
    })
    
    beforeEach(function() {
        const homepage = new HomePage();
        homepage.visitHomepage();
        homepage.clickOnContactUsButton();
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include', "contactus.html")
        contactUsPage.contactFormSubmission("first_name", data.last_name, data.email, "Comment in Contact us form", 'h1', 'Thank You for your Message!')
    
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactUsPage.contactFormSubmission(data.first_name, data.last_name, " ", "Comment in Contact us form", 'body', 'Error: Invalid email address')

    });
})