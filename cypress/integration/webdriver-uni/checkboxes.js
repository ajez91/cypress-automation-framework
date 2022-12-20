/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(function() {
        cy.navigateTo_WebdriverUni_Checkbox_Page()
    })

    it("Checkbox and validate ", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    });

    it("Verify unchecked checkbox and validate ", () => {
        cy.get('#checkboxes > :nth-child(3) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Verify multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2","option-3","option-4"]).should('be.checked')
    });
})