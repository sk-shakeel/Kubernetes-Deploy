/// <reference types="Cypress" />

import {  BaseEyes, BaseHands } from "../BaseRobot";


export class SelectLabPageRobotEyes extends BaseEyes {
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

export class SelectLabPageRobotHands extends BaseHands {
  clickOnSelectDateTimeBtn() {
    this.clickOnTextElement("Select Date & Time");
  }

  clickToSelectLab(){
    cy.wait(2000);
    this.clickOnDomElementMultiple("[data-testid=labcard]")
  }
}
