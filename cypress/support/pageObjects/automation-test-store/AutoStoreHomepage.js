class AutoStoreHomepage {
    
    accessHomepage() {
        cy.visit("https://automationteststore.com/");
    }

    goToHairCare() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default AutoStoreHomepage;