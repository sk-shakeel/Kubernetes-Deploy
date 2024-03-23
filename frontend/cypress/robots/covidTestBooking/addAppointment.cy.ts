/// <reference types="Cypress" />

import {  BaseEyes, BaseHands } from "../BaseRobot";


export class SelectAppointmentPageRobotEyes extends BaseEyes {
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

export class SelectAppointmentPageRobotHands extends BaseHands {
  eyes = new SelectAppointmentPageRobotEyes();
  clickOnAddAddressBtn() {
    this.clickOnTextElement("Add Address");
  }

}
