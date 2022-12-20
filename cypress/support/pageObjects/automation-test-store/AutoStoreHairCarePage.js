class AutoStoreHairCarePage {
    
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
          })
      
          cy.get('.dropdown-toggle > .fa').click().debug()
    }
}

export default AutoStoreHairCarePage;