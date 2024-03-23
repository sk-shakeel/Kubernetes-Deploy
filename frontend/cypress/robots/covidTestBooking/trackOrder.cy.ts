/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class TrackOrderRobotEyes extends BaseEyes {
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

export class TrackOrderRobotHands extends BaseHands {
  eyes = new TrackOrderRobotEyes();
  clickOnTrackYourOrderBtn() {
    this.clickOnTextElement('Track Your Order');
    this.eyes.seesPathNameInUrl(`/trackorder`); 
  }

  clickOnBackToHomeBtn(){
    this.clickOnTextElement('Back to Home');
    this.eyes.seesPathNameInUrl(`/home`);
  }
}
