/// <reference types="Cypress" />
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class FillSignUpFormDependencies extends BaseDependencies {
  visitSignUpPage() {
   cy.visit(`${Cypress.config().baseUrl}`);
  }
}
export class FillSignUpFormRobotEyes extends BaseEyes {
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

export class FillSignUpFormRobotHands extends BaseHands {

  loggingIntoTheApplication(){
    this.typeTextonDom("data-testid","first-name-inputfield","Patrick");
    cy.wait(2000);
    this.typeTextonDom("data-testid","last-name-inputfield","Smith");
    cy.wait(2000);
    this.typeTextonDom("data-testid","email-inputfield","Patrick@gmail.com");
    cy.wait(2000);
    this.clickOnDomElement("button")

    this.typeTextonDom("inputmode","email","Patrick@gmail.com");
    this.typeTextonDom("type","password","Patrick@123");
    cy.wait(2000);
    this.clickOnDomElement("button[class='cf66253b2 ca466c92f c7a1239ca c48127298 c8c2efd82']");
  }

}
