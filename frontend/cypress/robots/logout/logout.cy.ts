

/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class LogoutRobotEyes extends BaseEyes {
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

export class LogoutRobotHands extends BaseHands {
  eyes = new LogoutRobotEyes();
 clickOnLogout(){
    this.clickOnDomElement("[icon='user1']");
    cy.wait(1000);
    this.clickOnDomElement("[icon='logout']");
  }
}
