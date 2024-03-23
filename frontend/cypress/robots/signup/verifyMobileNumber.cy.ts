/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from "../BaseRobot";


export class MobileVerificationPageRobotEyes extends BaseEyes {
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

export class MobileVerificationPageRobotHands extends BaseHands {
  
  verifyMobileNumber(){
      cy.wait(1000);
      this.typeTextonDom("data-testid","mobile-number-inputfield","12345678");
      cy.wait(500);
      this.clickOnDomElement("button");
  }

  verifyOTP(){
    this.typeTextonDom("data-testid","otpitem-0","1");
    cy.wait(500);
    this.typeTextonDom("data-testid","otpitem-1","1");
    cy.wait(500);
    this.typeTextonDom("data-testid","otpitem-2","1");
    cy.wait(500);
    this.typeTextonDom("data-testid","otpitem-3","1");
    cy.wait(500);
    this.clickOnDomElement("button");
  }
}
