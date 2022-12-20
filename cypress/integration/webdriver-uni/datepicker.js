/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })

        // let date = new Date();
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //get current day i.e. 22

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate()) //get current day i.e. 22 + 5 = 27

        var date = new Date();
        date.setDate(date.getDate() + 86);
        cy.log(date.getDate())

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("en-US", { month: "long" });
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('#datepicker').click()
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
                if (!currDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
                    if (!currDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        };

        function selectFutureDays() {
            cy.get("[class='day']").contains(futureDay).click()
        }
        selectMonthAndYear()
        selectFutureDays()
    })
})