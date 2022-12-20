/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via autocomplete lists", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            cy.log(prod)
            const productToSelect = 'Avacado'

            if (prod === productToSelect) {
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').clear().type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                cy.log(prod)
                const productToSelect = 'Grapes'

                if (prod === productToSelect) {
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })
        });
    })
})