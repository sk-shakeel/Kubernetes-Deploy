/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class HomePageRobotEyes extends BaseEyes {
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

export class HomePageRobotHands extends BaseHands {
  clickOnCovidTestIcon() {
    cy.wait(2000)
    this.clickOnDomElement("[data-testid='test1']")
    // check for covid info page navigation
    
  }
  clickOnAddPatientBtn() {
    this.clickOnTextElement("Add Patient");
    // check navigation
  }

}
