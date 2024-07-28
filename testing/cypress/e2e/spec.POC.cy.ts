import homePage from "../pages/typescriptWorkshop/homePagePOC";
import { RandomNameGenerator } from "../utils/utilsPOC";
import { values } from "../enums";

let randonName = RandomNameGenerator(values.Nombre);
let randonSurname = RandomNameGenerator(values.Apellido);

describe("Validate click 'Add user' button - first step", () => {
  before((): void => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Validate click on Add users button", () => {
    cy.log(" 1 - navigate to http://localhost:3000/");
    cy.visit("http://localhost:3000/");

    cy.log(" 2 - Click on Add users button");
    homePage.adduserBtn().click();
    expect(homePage.adduserBtn().should("not.exist"));
    expect(homePage.nameLabel().should("be.visible"));
    expect(homePage.lastnameLabel().should("be.visible"));
    expect(homePage.saveBtn().should("be.disabled"));
    expect(homePage.fetchusersBtn().should("be.visible"));
  });
});

describe("Validate populate name an lastname inputs - second and third step", () => {
  before((): void => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    homePage.adduserBtn().click();
  });

  it("Validate Populate name input text with test data", () => {
    cy.log(" 3 - Populate name input text with test data");
    homePage.nameInput().type(randonName);
    expect(homePage.saveBtn().should("be.disabled"));
  });

  it("Validate Populate last name input text with test data", () => {
    cy.log(" 4 - Populate last name input text with test data");
    homePage.nameInput().type(randonName);
    homePage.lastnameInput().type(randonSurname);
    homePage.saveBtn().should("be.enabled");
  });
});

describe("Validate add a new user functionality - fifth step", () => {
  before((): void => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("http://localhost:3000/");
    homePage.fillUserData(randonName, randonSurname);
  });

  it("Validate save a new user button", async () => {
    cy.log(" 5 - Click on Save button");
    homePage.saveBtn().click();
    expect(homePage.adduserBtn().should("be.visible"));
    expect(homePage.nameLabel().should("not.exist"));
    expect(homePage.lastnameLabel().should("not.exist"));
    expect(homePage.saveBtn().should("not.exist"));
    expect(await homePage.getListedValueByIndex(0)).equal(
      randonName + " " + randonSurname
    );
    expect(homePage.collapseBtn().should("be.visible"));
  });
});
