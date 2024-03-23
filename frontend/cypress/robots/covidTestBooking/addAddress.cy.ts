/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class AddAddressPageRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesElementWithDataTestId(dataTestId: string) {
    return this.seesDataTestIdVisible(dataTestId);
  }

  seesElementWithText(text: string) {
    return this.seesDomVisible(text);
  }

  seesElementWithId(id: string) {
    return this.seesIdVisible(id);
  }
}

export class AddAddressPageRobotHands extends BaseHands {
  clickOnSaveAddressBtn() {
    cy.wait(2000);
    this.clickOnTextElement("Save Address");
  }

  fillAddressForm() {
    this.typeTextonDom("placeholder","2235 California Street  APT#021","2235 California Street  APT#021");
    cy.wait(500);
    this.typeTextonDom("placeholder","Mountain View California","Mountain View California");
    cy.wait(500);
    this.typeTextonDom("placeholder","11023","11023");
    cy.wait(500);
    this.typeTextonDom("placeholder","Mountain View ,California","Mountain View, California");
  }

  clickToSelectAddress() {
    this.clickOnDomElementMultiple('.css-1keu4l3');
  }

  clickOnCompleteOrderBtn() {
    cy.wait(2000);
    this.clickOnTextElement("Complete Order");
  }
}
