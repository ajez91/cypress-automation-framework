import AutoStoreHomepage from "../../support/pageObjects/automation-test-store/AutoStoreHomepage";
import AutoStoreHairCarePage from "../../support/pageObjects/automation-test-store/AutoStoreHairCarePage";

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {

  const autoStoreHomepage = new AutoStoreHomepage()
  const autoStoreHairCarePage = new AutoStoreHairCarePage()

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    autoStoreHomepage.accessHomepage()
    autoStoreHomepage.goToHairCare()
  });

  it("Add specific items to basket", () => {
    autoStoreHairCarePage.addHairCareProductsToBasket()
  });
});
