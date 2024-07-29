import BasePage from "./BasePagePOC";
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 1️⃣ ***** EJERCICIO 1 ***** - 1️⃣
//localiza los siguientes elementos en la página web de manera que
//puedas interactuar con ellos
// EJEMPLOS:
//
// El botón adduser(añadir usuarios) lo podemos localizar por clase ".addUser-btn"⚠️

// evita el uso de Xpath!⚠️ tus tests podrían fallar
let pageLocators = {
  addUserBtn: ".addUser-btn",
  //Escribe tus locators para cada elemento aquí:
  fetchUsersBtn: "",
  nameLabel: "",
  lastNameLabel: "",
  nameInputText: "",
  lastNameInputText: "",
  saveBtn: "",
  collapseBtn: "",
  userNames: "",
};
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
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

  // ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

  // 2️⃣ ***** EJERCICIO 2 ***** - getListedUsers() 2️⃣
  //Completa la funcion getListedUsers() para que devuelva el texto contenido en cada elemento de la lista

  //REQUISITOS:
  //  🟢 La función utiliza la funcion this.getElementsTextContentByLocator() de la clase base
  //  🟢 La función debe retornar un array con los valores de texto contenidos dentro cada elemento que coincida
  //   con el locator en este caso los nomnbres y apellidos

  async getListedUsers() {
    // Tu código aquí:
  }

  // 3️⃣ ***** EJERCICIO 3 ***** - getListedValueByIndex() 3️⃣  
  //Completa la funcion getListedValueByIndex para que devuelva un solo elemento de la lista según un index recibido por parametro

  //REQUISITOS:
  //  🟢 La función utiliza la funcion  this.getListedUsers() que creaste mas arriba
  //  🟢 La función debe retornar un string con el valor del listado según el index recibido

  async getListedValueByIndex(index: number) {
    // Tu código aquí:
  }

  // ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
  fillUserData(name: string, lastName: string): void {
    this.adduserBtn().click();
    this.nameInput().type(name);
    this.lastnameInput().type(lastName);
  }
}
export default new HomePage();
