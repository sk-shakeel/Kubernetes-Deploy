/// <reference types="Cypress" />

import {  BaseEyes, BaseHands } from "../BaseRobot";

export class AddPatientPageRobotEyes extends BaseEyes {
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

export class AddPatientPageRobotHands extends BaseHands {
  clickOnNextBtn() {
    this.clickOnTextElement("Next");
  }

  clickOnSelectLabBtn() {
    this.clickOnTextElement("Select Lab");
  }

  addPatientDetails(){
      this.typeTextonDom("placeholder","eg: Patrick Smith","Patrick");
      cy.wait(2000);
      this.typeTextonDom("placeholder","mm/dd/yyyy","11/20/2022");
      this.clickOnDomElementMultiple("[data-testid=RadioButton]");
  }

  selectPatient(){
    this.clickOnDomElementMultiple("[data-testid=Patrick-checkbox]");
  }
}
