/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class ReviewOrderAndCheckoutRobotEyes extends BaseEyes {
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

export class ReviewOrderAndCheckoutRobotHands extends BaseHands {
  clickOnContinueBtn() {
    this.clickOnTextElement('Continue');
  }

  clickOnPayNowBtn() {
    this.clickOnTextElement('Pay Now');
  }
}
