import homePage from "../pages/typescriptWorkshop/homePage";
import { RandomNameGenerator } from "../utils/utils";
import { values } from "../enums";

describe("Test cases typescript-First app", () => {
  before((): void => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Validate add a new user functionality", async() => {
    cy.log("step 1 - navigate to http://localhost:3000/");
    cy.visit("http://localhost:3000/");

    cy.log("step 2 - Click on Add users button");
    homePage.adduserBtn().click();
    expect(homePage.adduserBtn().should("not.exist"));
    expect(homePage.nameLabel().should("be.visible"));
    expect(homePage.lastnameLabel().should("be.visible"));
    expect(homePage.saveBtn().should("be.disabled"));
    expect(homePage.fetchusersBtn().should("be.visible"));
  
    cy.log("step 3 - Populate name input text with test data")
    let randonName=RandomNameGenerator(values.Nombre)
    homePage.nameInput().type(randonName)
    expect(homePage.saveBtn().should("be.disabled"));

    cy.log("step 4 - Populate last name input text with test data")
    let randonSurname=RandomNameGenerator(values.Apellido)
    homePage.lastnameInput().type(randonSurname)
    homePage.saveBtn().should("be.enabled")

    cy.log("step 5 - Click on Save button")
    homePage.saveBtn().click()
    expect(homePage.adduserBtn().should("be.visible"));
    expect(homePage.nameLabel().should("not.exist"));
    expect(homePage.lastnameLabel().should("not.exist"));
    expect(homePage.saveBtn().should("not.exist"));
    expect(await homePage.getListedValueByIndex(0)).equal(randonName + " " + randonSurname)
    expect(homePage.collapseBtn().should("be.visible"));
  });
});