import BasePage from "./BasePage";

let pageLocators = {
  addUserBtn: ".addUser-btn",
  fetchUsersBtn: ".button",
  nameLabel: "#form-data > :nth-child(1)",
  lastNameLabel: "#form-data > :nth-child(2)",
  nameInputText: 'input[name="name"]',
  lastNameInputText: 'input[name="lastName"]',
  saveBtn: ".save-btn",
  collapseBtn: ".collapse-btn",
  userNames: ".cards",
};

class HomePage extends BasePage {
  adduserBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.addUserBtn);

  fetchusersBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.fetchUsersBtn);

  nameLabel = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.nameLabel);

  lastnameLabel = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.lastNameLabel);

  nameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.nameInputText);

  lastnameInput = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.lastNameInputText);

  saveBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.saveBtn);

  collapseBtn = (): Cypress.Chainable<JQuery<HTMLElement>> =>
    cy.get(pageLocators.collapseBtn);

  /**
   * Gets an array with users displayed in string format
   * @function
   * @async
   * @returns {Promise<string[]>}
   */
  async getListedUsers(): Promise<string[]> {
    return (await this.getStringElementsByLocator(
      pageLocators.userNames
    )) as string[];
  }

    /**
   * Gets an array with users displayed in string format
   * @function
   * @async
   * @returns {Promise<string[]>}
   */
  async getListedValueByIndex(index: number): Promise<string> {
    let value = await this.getListedUsers()
    return value[index]
  }

  /**
   * Full user method
   * @function
   * @param {string} name - name
   * @param {string} lastName - lastname
   */
  fillUserData(name: string, lastName: string): void {
    this.adduserBtn().click();
    this.nameInput().type(name);
    this.lastnameInput().type(lastName);
  }
}

export default new HomePage();
