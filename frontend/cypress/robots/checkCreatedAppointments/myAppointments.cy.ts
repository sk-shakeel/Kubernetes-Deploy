/// <reference types="Cypress" />

import {  BaseEyes } from "../BaseRobot";


export class MyAppointmentsRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesUpcomingText() {
    return this.seesDomVisible("Upcoming Tests");
  }

  seesRecentText() {
    return this.seesDomVisible("Recent Tests");
  }

  seesElementWithDataTestId(dataTestId: string) {
    return this.seesDataTestIdVisible(dataTestId);
  }

  seesElementWithId(id: string) {
    return this.seesIdVisible(id);
  }
}

