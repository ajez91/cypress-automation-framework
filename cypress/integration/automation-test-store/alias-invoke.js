/// <reference types="cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific haircut product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it("Get product thumbnail", () => {
        cy.visit("https://automationteststore.com/")
        
        //then solution
        //cy.get('.thumbnail').then($elements => {
            //cy.log($elements.length)

        //alias solution
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        })

    it("Validate Add to cart icon title", () => {
        cy.visit("https://automationteststore.com/")

        //chain solution
        //cy.get('.productcart').should('have.attr', 'title', 'Add to Cart')

        //alias solution
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only("Calculate total of normal and sale product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list)=> {
            cy.log($el.text() )
        })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (let i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log("Non sale price items total: "+ itemsPriceTotal)
        })


        cy.get('@saleItemPrice').then($linkText => {
            var saleitemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (let i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleitemsPriceTotal += Number(saleItemPrice[i])
            }
            itemsTotal += saleitemsPriceTotal
            cy.log("Sale price items total: "+ saleitemsPriceTotal)
        }).then(()=> {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.eq(625.6)
        })
    })
})

