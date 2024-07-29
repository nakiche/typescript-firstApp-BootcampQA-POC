export default class BasePage {

    constructor() {
    }

     /**
     * Gets the text content from the elements inside and array
     * @function
     * @async
     * @param {string} locator - Html elements array
     * @returns {Promise<string>}
     */
     async getElementsTextContentByLocator(locator: string): Promise<string[]> {
        return new Promise<string[]>((resolve): void => {
            cy.get(locator).then((items: JQuery<HTMLElement>): void => {
                let response: string[] = []
                items.toArray().forEach(function (value: HTMLElement): void {
                    response.push(value.textContent)
                });
                resolve(response);
            });
        });
    }

}