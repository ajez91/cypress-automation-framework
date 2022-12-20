/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    })

    it("It should be able to drag and drop a draggable item", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("It should be able to perform double mouse click", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#double-click').dblclick();
    })

    it.only("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#click-box').trigger('mousedown', {which:1}).then(($el)=>{
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})