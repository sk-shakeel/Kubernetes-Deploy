import {FillSignUpFormRobotEyes,FillSignUpFormDependencies,FillSignUpFormRobotHands,} from '../robots/signup/fillSignupForm.cy';
import { MobileVerificationPageRobotHands } from '../robots/signup/verifyMobileNumber.cy';
import { HomePageRobotEyes,HomePageRobotHands } from '../robots/covidTestBooking/navigateToCovidInfo.cy';
import { AddPatientPageRobotHands } from '../robots/covidTestBooking/addPatient.cy';
import { SelectLabPageRobotHands } from '../robots/covidTestBooking/selectLab.cy';
import { SelectAppointmentPageRobotHands } from '../robots/covidTestBooking/addAppointment.cy';
import { AddAddressPageRobotHands } from '../robots/covidTestBooking/addAddress.cy';
import { ReviewOrderAndCheckoutRobotHands } from '../robots/covidTestBooking/reviewOrderAndCheckout.cy';
import { TrackOrderRobotHands } from '../robots/covidTestBooking/trackOrder.cy';
import { ReportsPageRobotHands } from '../robots/checkCreatedAppointments/reports.cy';
import { MyAppointmentsRobotEyes } from '../robots/checkCreatedAppointments/myAppointments.cy';
import { LogoutRobotHands } from '../robots/logout/logout.cy';

context('Checking the flow of the Zemoso Diagnostics Application', () => {
  const  SignUpEyes = new FillSignUpFormRobotEyes();
  const  SignUpDependencies = new FillSignUpFormDependencies();
  const  SignUpHands = new FillSignUpFormRobotHands();
  const  MobileVerificationHands = new MobileVerificationPageRobotHands();
  const  AddPatientHands = new AddPatientPageRobotHands();
  const  SelectLabHands = new SelectLabPageRobotHands();
  const  SelectAppointmentHands = new SelectAppointmentPageRobotHands();
  const  AddAddressHands = new AddAddressPageRobotHands();
  const  ReviewOrderAndCheckoutHands = new ReviewOrderAndCheckoutRobotHands();
  const  TrackOrderHands = new TrackOrderRobotHands();
  const  ReportsHands = new ReportsPageRobotHands();
  const  MyAppointmentsEyes = new MyAppointmentsRobotEyes();
  const  LogoutHands = new LogoutRobotHands();
  const  HomeEyes = new HomePageRobotEyes();
  const  HomeHands = new HomePageRobotHands();

  describe('Logging into the Application', () => {
    it('Signing Up into the Application', () => {
       SignUpDependencies.visitSignUpPage();
       SignUpEyes.seesElementWithText('First Name');
       SignUpEyes.seesElementWithText('Last Name');
       SignUpEyes.seesElementWithText('Email id');
       SignUpEyes.seesElementWithText('Zemoso Diagnostics');
       SignUpHands.loggingIntoTheApplication();
       SignUpEyes.seesPathNameInUrl("/")
    });
  });

  describe('Verify the Mobile Number', () => {
    it('Enter Mobile number and verify OTP', () => {
       SignUpEyes.seesElementWithText("Get OTP");
       MobileVerificationHands.verifyMobileNumber();
       SignUpEyes.seesPathNameInUrl("/verify");
       SignUpEyes.seesElementWithText("Verify");
       MobileVerificationHands.verifyOTP();
       SignUpEyes.seesPathNameInUrl("/home");
    });
  });

  describe('Booking for covid RTPCR test', () => {
    it('Navigate to Covid Info page', () => {
       HomeEyes.seesElementWithText('Commonly Booked Test');
       HomeEyes.seesElementWithText('Why Choose Us');
       HomeEyes.seesElementWithText('Tests You Can Choose From');
       HomeEyes.seesElementWithText('Frequently Asked Questions');
       HomeHands.clickOnCovidTestIcon();
       SignUpEyes.seesPathNameInUrl("/covid");
    });
    it('add patient', () => {
       SignUpEyes.seesElementWithText("Add Patient");
       HomeHands.clickOnAddPatientBtn();
       SignUpEyes.seesPathNameInUrl("/addpatients");
       AddPatientHands.addPatientDetails();
       SignUpEyes.seesElementWithText("Next");
       AddPatientHands.clickOnNextBtn();
       SignUpEyes.seesPathNameInUrl(`/selectpatient`);
       AddPatientHands.selectPatient();
       SignUpEyes.seesElementWithText("Select Lab");
       AddPatientHands.clickOnSelectLabBtn();
       SignUpEyes.seesPathNameInUrl(`/selectlab`);
    });
    it('select lab', () => {
       SelectLabHands.clickToSelectLab();
       SignUpEyes.seesElementWithText("Select Date & Time");
       SelectLabHands.clickOnSelectDateTimeBtn();
       SignUpEyes.seesPathNameInUrl(`/setdate`);
    });
    it('Add Appointment and Address', () => {
      SignUpEyes.seesElementWithText("Add Address");
       SelectAppointmentHands.clickOnAddAddressBtn();
       SignUpEyes.seesPathNameInUrl("/addaddress");
       AddAddressHands.fillAddressForm();
       SignUpEyes.seesElementWithText("Save Address");
       AddAddressHands.clickOnSaveAddressBtn();
       SignUpEyes.seesPathNameInUrl("/selectaddress");
       AddAddressHands.clickToSelectAddress();
       SignUpEyes.seesElementWithText("Complete Order");
       AddAddressHands.clickOnCompleteOrderBtn();
       SignUpEyes.seesPathNameInUrl("/revieworder");
    });
    it('Review Order and checkout', () => {
      SignUpEyes.seesElementWithText("Continue");
       ReviewOrderAndCheckoutHands.clickOnContinueBtn();
       SignUpEyes.seesPathNameInUrl("/checkout");
       SignUpEyes.seesElementWithText("Pay Now");
       ReviewOrderAndCheckoutHands.clickOnPayNowBtn();
       SignUpEyes.seesPathNameInUrl("/orderplaced");
    });
  });

  describe('Order confirmation and Track your order', () => {
    it('Order confirmation and track order', () => {
       SignUpEyes.seesElementWithText("Track Your Order");
       TrackOrderHands.clickOnTrackYourOrderBtn();
       SignUpEyes.seesPathNameInUrl("/trackorder");
       SignUpEyes.seesElementWithText("Back to Home");
       TrackOrderHands.clickOnBackToHomeBtn();
       SignUpEyes.seesPathNameInUrl("/home");
    });
  });

  describe('Check reports and appointments', () => {
    it('Check reports and appointments', () => {
       SignUpEyes.seesElementWithText("Reports");
       ReportsHands.clickOnReportsNavItem();
       SignUpEyes.seesPathNameInUrl("/reports");
       SignUpEyes.seesElementWithText("My Appointments");
       ReportsHands.clickOnMyAppointmentsNavItem();
       SignUpEyes.seesPathNameInUrl("/appointments");
       MyAppointmentsEyes.seesUpcomingText();
       MyAppointmentsEyes.seesRecentText();
    });
  });

  describe('Logout from the application', () => {
    it('Logout from the application', () => {
       LogoutHands.clickOnLogout();
       SignUpEyes.seesPathNameInUrl("/");
    });
  });
});
