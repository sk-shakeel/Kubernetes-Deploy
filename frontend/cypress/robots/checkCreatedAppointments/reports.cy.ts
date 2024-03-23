/// <reference types="Cypress" />

import { BaseEyes, BaseHands } from '../BaseRobot';

export class ReportsPageRobotEyes extends BaseEyes {
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

export class ReportsPageRobotHands extends BaseHands {
  clickOnReportsNavItem() {
    this.clickOnTextElement('Reports');
  }

  clickOnMyAppointmentsNavItem() {
    this.clickOnTextElement('My Appointments');
  }
}
