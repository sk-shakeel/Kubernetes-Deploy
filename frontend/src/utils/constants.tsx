import { LogoutOptions, User } from '@auth0/auth0-react';
import React from 'react';

import Altos from '../assets/icons/altos.svg';
import Accountavatar from '../assets/icons/accountavatar.svg';
import Apple from '../assets/icons/apple.svg';
import Appstore from '../assets/icons/AppStore.svg';
import Avatar from '../assets/icons/avatar.svg';
import Award from '../assets/icons/award.svg';
import Back from '../assets/icons/back.svg';
import BloodTest from '../assets/icons/bloodtest.svg';
import BlueTick from '../assets/icons/bluetick.svg';
import Body from '../assets/icons/body.svg';
import Calendar from '../assets/icons/calendar.svg';
import Cardiac from '../assets/icons/cardiac.svg';
import Cart from '../assets/icons/cart.svg';
import Check from '../assets/icons/check.svg';
import Clock from '../assets/icons/clock.svg';
import RedClock from '../assets/icons/clockRed.svg';
import Close from '../assets/icons/close.svg';
import Covid from '../assets/icons/covid.svg';
import CreditCard from '../assets/icons/credit-card.svg';
import CreditCardColor from '../assets/icons/creditcard.svg';
import Diabetestest from '../assets/icons/diabetestest.svg';
import Doctor from '../assets/icons/doctor.svg';
import Doctor1 from '../assets/icons/doctor-1.svg';
import Dollar from '../assets/icons/dollar.svg';
import DoubleArrow from '../assets/icons/doublearrow.svg';
import DownArrowThick from '../assets/icons/downarrow-thick.svg';
import DownArrowThin from '../assets/icons/downarrow-thin.svg';
import Download from '../assets/icons/download.svg';
import Facebook from '../assets/icons/facebook.svg';
import Family from '../assets/icons/family.svg';
import Fb from '../assets/icons/fb.svg';
import FileText from '../assets/icons/file-text.svg';
import FileText1 from '../assets/icons/file-text-1.svg';
import Google from '../assets/icons/google.svg';
import Gpay from '../assets/icons/GooglePay.svg';
import GooglePlayStore from '../assets/icons/GooglePlay.svg';
import HelpCircle from '../assets/icons/help-circle.svg';
import Home from '../assets/icons/home.svg';
import Home1 from '../assets/icons/home-1.svg';
import Home2 from '../assets/icons/home-2.svg';
import HumanDoctor from '../assets/icons/HumanDoctor.svg';
import Info from '../assets/icons/info.svg';
import Kidney from '../assets/icons/kidney.svg';
import Labcrop from '../assets/icons/labcrop.svg';
import Labtechnician from '../assets/icons/labtechnician.svg';
import Labtechnician1 from '../assets/icons/labtechnician-1.svg';
import LeftArrow from '../assets/icons/leftarrow.svg';
import Lipid from '../assets/icons/lipid.svg';
import Liver from '../assets/icons/liver.svg';
import Logo from '../assets/icons/logo.svg';
import Logout from '../assets/icons/log-out.svg';
import Map from '../assets/icons/map.svg';
import MapPin from '../assets/icons/map-pin.svg';
import MapPin1 from '../assets/icons/map-pin-1.svg';
import NetBanking from '../assets/icons/NetBanking.svg';
import Offer from '../assets/icons/offer.svg';
import PaySuccess from '../assets/icons/paymentsuccess.svg';
import PayPal from '../assets/icons/PayPal.svg';
import PDF from '../assets/icons/PDF.svg';
import PDF_h from '../assets/icons/PDF_h.svg';
import Pickup from '../assets/icons/pickup.svg';
import Reports from '../assets/icons/reports.svg';
import Reports1 from '../assets/icons/reports-1.svg';
import Rightarrow from '../assets/icons/rightarrow.svg';
import ProgressIndicator from '../assets/icons/ProgressIndicator.svg';
import ProgressIndicator2 from '../assets/icons/ProgressIndicator2.svg';
import Search from '../assets/icons/search.svg';
import Selected from '../assets/icons/selected.svg';
import Share from '../assets/icons/share.svg';
import Shield from '../assets/icons/shield.svg';
import Sort from '../assets/icons/sort.svg';
import Star from '../assets/icons/star.svg';
import Test2 from '../assets/icons/test.svg';
import Test1 from '../assets/icons/test-1.svg';
import Testconducted from '../assets/icons/testconducted.svg';
import Testimony2 from '../assets/icons/testimony2.svg';
import Testimony3 from '../assets/icons/testimony3.svg';
import Testinfo from '../assets/icons/testinfo.svg';
import Throid from '../assets/icons/throid.svg';
import Trash2 from '../assets/icons/trash-2.svg';
import Twitter from '../assets/icons/twitter.svg';
import Uparrow from '../assets/icons/uparrow.svg';
import UserIcon from '../assets/icons/user.svg';
import User1 from '../assets/icons/user-1.svg';
import Users from '../assets/icons/users.svg';
import Vector from '../assets/icons/Vector.svg';
import Whitecalendar from '../assets/icons/whitecalendar.svg';
import Stress from '../assets/icons/stress.svg';
import BodyTest from '../assets/icons/bodytest.svg';
import { PatientProps } from '../services';

export const domain =
  process.env.REACT_APP_AUTH0_DOMAIN !== undefined
    ? process.env.REACT_APP_AUTH0_DOMAIN
    : '';
export const clientId =
  process.env.REACT_APP_AUTH0_CLIENT_ID !== undefined
    ? process.env.REACT_APP_AUTH0_CLIENT_ID
    : '';

export const userName = (user: User | undefined) => {
  if (user?.name !== undefined) {
    return user?.name;
  }
  return ' ';
};

export interface SvgImageType {
  [key: string]: JSX.Element;
}

export const ICONS: SvgImageType = {
  kidney: <Kidney />,
  altos: <Altos />,
  accountavatar: <Accountavatar />,
  apple: <Apple />,
  appStore: <Appstore />,
  avatar: <Avatar />,
  award: <Award />,
  back: <Back />,
  bloodtest: <BloodTest />,
  bluetick: <BlueTick />,
  body: <Body />,
  bodyTest: <BodyTest />,
  calendar: <Calendar />,
  cardiac: <Cardiac />,
  cart: <Cart />,
  check: <Check />,
  clock: <Clock />,
  RedClock: <RedClock />,
  close: <Close />,
  covid: <Covid />,
  creditcard: <CreditCard />,
  creditcardcolor: <CreditCardColor />,
  diabetestest: <Diabetestest />,
  doctor: <Doctor />,
  doctor11: <Doctor1 />,
  dollor: <Dollar />,
  doublearrow: <DoubleArrow />,
  downarrowthick: <DownArrowThick />,
  downarrowthin: <DownArrowThin />,
  download: <Download />,
  facebook: <Facebook />,
  family: <Family />,
  fb: <Fb />,
  filetext: <FileText />,
  filetext1: <FileText1 />,
  google: <Google />,
  GooglePay: <Gpay />,
  googlePlay: <GooglePlayStore />,
  helpcircle: <HelpCircle />,
  home: <Home />,
  home1: <Home1 />,
  home2: <Home2 />,
  humanDoctor: <HumanDoctor />,
  info: <Info />,
  labcrop: <Labcrop />,
  labtechnician: <Labtechnician />,
  labtechnician1: <Labtechnician1 />,
  leftarrow: <LeftArrow />,
  lipid: <Lipid />,
  liver: <Liver />,
  logo: <Logo />,
  logout: <Logout />,
  map: <Map />,
  mappin: <MapPin />,
  mappin1: <MapPin1 />,
  NetBanking: <NetBanking />,
  offer: <Offer />,
  paymentsuccess: <PaySuccess />,
  PayPal: <PayPal />,
  PDF: <PDF />,
  PDF_h: <PDF_h />,
  pickup: <Pickup />,
  reports: <Reports />,
  reports1: <Reports1 />,
  rightarrow: <Rightarrow />,
  progressIndicator: <ProgressIndicator />,
  progressIndicator2: <ProgressIndicator2 />,
  search: <Search />,
  selected: <Selected />,
  share: <Share />,
  shield: <Shield />,
  sort: <Sort />,
  stress: <Stress />,
  star: <Star />,
  test: <Test2 />,
  test1: <Test1 />,
  testconducted: <Testconducted />,
  testimony2: <Testimony2 />,
  testimony3: <Testimony3 />,
  testinfo: <Testinfo />,
  throid: <Throid />,
  trash2: <Trash2 />,
  twitter: <Twitter />,
  uparrow: <Uparrow />,
  user: <UserIcon />,
  user1: <User1 />,
  users: <Users />,
  Vector: <Vector />,
  whitecalendar: <Whitecalendar />,
};

export const SVG_PATH = '../assets/icons/';
export const SVG_IMAGE_PATH = 'assets/images/';

export enum Svg {
  labtechnition = 'humanDoctor',
  home = 'home',
  altos = 'altos',
  offer = 'offer',
  avatar = 'avatar',
  accountavatar = 'accountavatar',
  award = 'award',
  back = 'back',
  logo = 'logo',
  bloodtest = 'bloodtest',
  body = 'body',
  calendar = 'calendar',
  check = 'check',
  clock = 'clock',
  close = 'close',
  covid = 'covid',
  creditcard = 'creditcard',
  diabetestest = 'diabetestest',
  doctor = 'doctor',
  dollor = 'dollar',
  doublearrow = 'doublearrow',
  downarrowthick = 'downarrowthick',
  downarrowthin = 'downarrowthin',
  download = 'download',
  facebook = 'fb',
  fb = 'facebook',
  filetext = 'filetext',
  filetext1 = 'filetext1',
  GooglePay = 'GooglePay',
  helpcircle = 'helpcircle',
  home1 = 'home1',
  home2 = 'home2',
  info = 'info',
  kidney = 'kidney',
  labcrop = 'labcrop',
  labtechnician = 'labtechnician',
  labtechnician1 = 'labtechnician1',
  leftarrow = 'leftarrow',
  lipid = 'lipid',
  liver = 'liver',
  logout = 'logout',
  mappin = 'mappin',
  NetBanking = 'NetBanking',
  PayPal = 'PayPal',
  PDF = 'PDF',
  pickup = 'pickup',
  progressIndicator = 'progressIndicator',
  reports = 'reports',
  reports1 = 'reports-1',
  rightarrow = 'rightarrow',
  search = 'search',
  selected = 'selected',
  share = 'share',
  shield = 'shield',
  sort = 'sort',
  test = 'test',
  test1 = 'test1',
  testconducted = 'testconducted',
  testimony2 = 'testimony2',
  testimony3 = 'testimony3',
  throid = 'throid',
  trash2 = 'trash-2',
  twitter = 'twitter',
  uparrow = 'uparrow',
  user = 'user',
  users = 'users',
  user1 = 'user1',
  vector = 'Vector',
  Google = 'google',
  Apple = 'apple',
  BlueTick = 'bluetick',
  star = 'star',
  blueMap = 'map',
  PDF_lg = 'PDF_h',
  Family = 'family',
  appstore = 'appStore',
  bodytest = 'body test',
  cardiac = 'cardiac',
  family = 'family',
  googleplay = 'googlePlay',
  paymentsuccess = 'paymentsuccess',
  stress = 'stress',
  testinfo = 'testinfo',
  technition = 'technition',
  whitecalendar = 'whitecalendar',
  RedClock = 'clockRed',
  Cart = 'cart',
}

export const ORDER_PLACED = 'Your order has been placed';
export const INSTRUCTIONS = 'Instructions';
export const COMMENT =
  "Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment.";
export const REPORTS = 'E-Reports by 12hrs';
export const signup = 'or sign up with';

export const reportCardDetails = [
  'Los Altos Center Lab',
  'COVID RT-PCR Test',
  'Pending',
  '02 Feb 2022',
  '08.30 AM',
];

export const accountDetails: {
  userName: string;
  userEmail: string;
  userNumber: string;
  editOption: string;
} = {
  userName: 'Patrick Smith',
  userEmail: 'patricksmith@gmail.com',
  userNumber: '+1 330-617-3324',
  editOption: 'Edit',
};
export const appointmentDetails = [
  'Covid RTPCR',
  '- Los Altos Center Lab',
  'Patrick Smith',
  'Wed 23, 7.00 am to 8.00 am',
];

export const Test = (test: number) =>
  test > 1 ? test + ' Tests' : test + ' Test';

export const labDetailsCardContent = [
  'Los Altos Center Lab',
  'Slots Available',
  'Reports ready in',
  '24 hrs',
];

export const labRatingSlots = [4.3, 4, 1200, 1];

export const itemTotal = 'Item Total';
export const discount = 'Discount';
export const grandTotal = 'Grand Total';

export const BannerText = [
  '60% off on your first order',
  'Your health is our priority',
  'Book now',
];

export const SAMPLE = 'Sample';
export const CARD_HOLDER = 'Card Holder';
export const EXPIRES = 'Expires';

export const creditcardFormat = (value: string) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
};

export const AccountHeadings: {
  image: Svg;
  heading: string;
  desc?: string;
}[] = [
  {
    image: Svg.blueMap,
    heading: 'Track My Orders',
    desc: 'Track your recent orders & see order status ',
  },
  {
    image: Svg.users,
    heading: 'My Family & Friends',
    desc: 'Manage & view family members & reports',
  },
  {
    image: Svg.creditcard,
    heading: 'Payments',
    desc: 'Payment modes & refund status',
  },
  {
    image: Svg.home2,
    heading: 'Manage Address',
    desc: '2235 California Street Mountain View Cali...',
  },
  { image: Svg.offer, heading: 'Offers', desc: 'See offers for more details' },
  { image: Svg.helpcircle, heading: 'Help', desc: 'FAQ’s & general queries' },
  { image: Svg.filetext1, heading: 'Terms & conditions' },
  { image: Svg.logout, heading: 'Logout' },
];

export const SERVICE_LIST = [
  {
    logo: Svg.test,
    name: '1600+ Tests',
    width: '35rem',
    height: '35rem',
  },
  {
    logo: Svg.home1,
    name: 'At Home Services',
    width: '35vh',
    height: '35vh',
  },
  {
    logo: Svg.labtechnician,
    name: 'Certified Professionals',
    width: '35rem',
    height: '35rem',
  },
  {
    logo: Svg.award,
    name: 'CLIA Certified Labs',
    width: '30rem',
    height: '30rem',
  },
  {
    logo: Svg.reports,
    name: 'Reports in 24 - 48 Hours',
    width: '30rem',
    height: '30rem',
  },
  {
    logo: Svg.shield,
    name: 'Safe and Hygenic',
    width: '30rem',
    height: '30rem',
  },
];

export const serviceText = 'Why Choose Us';

export const timeSlotSelected = 'Time Slot Selected';
export const change = 'Change';

export const COSTFORMAT = 'Starting from $';
export const REPORTFORMAT = (time: number) =>
  'Reports ready in ' + time + ' Hours';
export const TESTNUMBER = (test: number) =>
  test > 1 ? test + ' tests' : test + ' test';
export const VIEWDETAILS = 'View Details';

export const ORDER_DETAILS = [
  'Patrick Smith',
  'COVID RT-PCR Test',
  '2235 California Street Mountain View California APT..',
  '',
  "Please don't eat or drink anything other than water for  8 -10 hours prior to the appointment.",
  'Instructions',
];

export const ORDER_AMOUNT = [2400];

export const CURRENCY_FORMATTER = (amount: number, currency: string) => {
  return `Total Amount Paid - ${getCurrencyCode(currency)}${amount}`;
};

export const LABTESTNUMBER = (test: number) =>
  test > 1 ? test + ' Tests' : test + ' Test';

export const COVIDRTPCRTEST = 'Covid RTPCR Test';
export const PACKAGE_QUESTION = 'Why you should book this package?';

export const reportSvgPdf = (status: string) => {
  return status === 'pending' ? Svg.PDF : Svg.PDF_lg;
};

export const formatPhoneNumber = (value: string) => {
  const currentValue = value.replace(/[^\d]/g, '');
  return `+1 (${currentValue.slice(0, 3)}) ${currentValue.slice(
    3,
    6,
  )}-${currentValue.slice(6, 10)}`;
};

export const getCurrencyCode = (value: string) => {
  const currency = value.toLowerCase();
  if (currency == 'dollar') {
    return '$';
  } else {
    return '₹';
  }
};

export const PAYPAL = 'PayPal';
export const GOOGLE_PAY = 'Google Pay';
export const NET_BANKING = 'Net Banking';

export const MonthSelectorValues = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const FooterText = [
  'Home',
  'Contact us',
  'Privacy policy',
  'Terms & conditions',
];
export const TimeSelectorValues = [
  [
    '06.00 - 07.00',
    '08.00 - 09.00',
    '09.00 - 10.00',
    '10.00 - 11.00',
    '11.00 - 12.00',
  ],
  ['12.00 - 01.00', '01.00 - 02.00', '02.00 - 03.00', '03.00 - 04.00'],
];

export const testimonialHeading = 'Customer Testimonials';
export const TESTIMONIAL_LIST = [
  {
    customerName: 'Abby',
    designation: 'San Jose, CA',
    testimony:
      'Very friendly and professional. Loved the follow-up and progress calls',
    testimonyImg: Svg.avatar,
  },
  {
    customerName: 'Abby',
    designation: 'San Jose, CA',
    testimony:
      'Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.',
    testimonyImg: Svg.testimony2,
  },
  {
    customerName: 'Abby',
    designation: 'San Jose, CA',
    testimony:
      'Very friendly and professional. Loved the follow-up and progress calls',
    testimonyImg: Svg.testimony3,
  },
];
export const LIST_OF_ADDRESSES = [
  {
    addressStatusstr: 'Default Address',
    addressnameStr: 'Home',
    addressStr:
      '2235 California Street Mountain View California  APT#021 - 11023',
    isChecked: true,
  },
  {
    addressStatusstr: 'Default Address',
    addressnameStr: 'Home',
    addressStr: '2235 samatha nagar ongole AP  APT#021 - 11023',
    isChecked: false,
  },
];

export const ADDRESS_TEXT = ['Select Address', 'Add Address'];

export const testCardValues = [
  { title: 'Full Body Check', logo: Svg.body },
  { title: 'Covid RTPCR', logo: Svg.covid },
  { title: 'Liver Function Test', logo: Svg.liver },
  { title: 'Complete Blood Count', logo: Svg.bloodtest },
  { title: 'Diabetes Test', logo: Svg.diabetestest },
  { title: 'Kidney Function Test', logo: Svg.kidney },
  { title: 'Thyroid Test', logo: Svg.throid },
  { title: 'Lipid Profile', logo: Svg.lipid },
];
export const MobileVerificationText: {
  heading: string;
  label: string;
  placeholder: string;
  btntext: string;
  hey: string;
} = {
  heading: 'Enter your Mobile number',
  label: 'Mobile Number',
  placeholder: '+1 (330) 617-3324',
  btntext: 'Get OTP',
  hey: 'Hey ',
};
export const features = [
  {
    icon: Svg.home,
    feature: 'Home visit',
  },
  {
    icon: Svg.test,
    feature: '1 test included',
  },
  {
    icon: Svg.doctor,
    feature: 'Free consultation',
  },
  {
    icon: Svg.reports,
    feature: 'Online reports',
  },
];
export const packageBenifits = [
  'To check if you have an active COVID-19 infection',
  'If you are showing symptoms of COVID-19 infection',
  'If you had a contact with someone with confirmed COVID-19',
];
export const cost = 1200;
export const reportTime = 24;
export const packagePoints = [
  'This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.',
  'Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.',
  'Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ',
  'Municipal corporation guidelines.',
];

export const trackOfEvents = [
  {
    eventName: 'Order placed',
    icon: Svg.check,
    tagline: 'Placed on Mon, 22 Feb, 11.00 AM',
  },
  {
    eventName: 'Lab technician assigned',
    icon: Svg.labtechnician,
    tagline: 'Esther Howard',
  },
  {
    eventName: 'Sample collection',
    icon: Svg.pickup,
    tagline: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
  },
  {
    eventName: 'Sample being examined',
    icon: Svg.testconducted,
    tagline: 'Estimated time - 24 hrs',
  },
  {
    eventName: 'Report ready',
    icon: Svg.filetext,
    tagline: '',
  },
];

export const Location = 'Mountain view, CA, USA';
export const ADDRESS_TEXT_FIELDS = [
  {
    label: 'House/ Flat/ Block No.',
    placeholder: '2235 California Street  APT#021',
  },
  {
    label: 'Road / Area',
    placeholder: 'Mountain View California',
  },
  {
    label: 'Zipcode',
    placeholder: '11023',
  },
  {
    label: 'City, State',
    placeholder: 'Mountain View ,California',
  },
];

export const PATIENT_ORDER_DETAIL = [
  {
    patientName: 'Arifa shaik',
    type: 'self',
    gender: 'F',
    age: 21,
    testName: 'COVID RCPT',
    cost: 1200,
    noOfTest: 1,
    testid: 'patient',
  },
];

export const HEADING = `Patients Details(${PATIENT_ORDER_DETAIL.length})`;
export const Appointment = ['Tue, Feb 23, 2022', '07.00 - 08.00 AM'];

export const REVIEW_ORDER_CARD_DATA = [1200, 100, 1100];

export const WelcomeMessage = (username: string) => 'Hey ' + username;
export const EnterOtpMessage = 'Enter the OTP to verify your details';

export const PATIENT_DETAILS = [
  {
    name: 'Patrick Smith',
    details: 'Self, Male, 30 years',
    isChecked: false,
  },
  {
    name: 'Arifa Shaik',
    details: 'Self, FeMale, 21 years',
    isChecked: true,
  },
];

export const PATIENT_TEXT = ['Add Patient ', 'New Patient'];

export const OTP = 'OTP';
export const LabSelectionText: {
  addtest: string;
  selectlab: string;
  sort: string;
} = {
  addtest: 'Add Test',
  selectlab: 'Select Lab',
  sort: 'Sort',
};

export const List_LabDetailsCard = [
  {
    id: 0,
    logo: Svg.altos,
    labName: labDetailsCardContent[0],
    rating: labRatingSlots[0],
    slotsAvailable: labRatingSlots[1],
    reportDetails: labDetailsCardContent[3],
    amount: labRatingSlots[2],
    noOfTests: labRatingSlots[3],
    isSelected: true,
  },
  {
    id: 1,
    logo: Svg.altos,
    labName: labDetailsCardContent[0],
    rating: labRatingSlots[0],
    slotsAvailable: labRatingSlots[1],
    reportDetails: labDetailsCardContent[3],
    amount: labRatingSlots[2],
    noOfTests: labRatingSlots[3],
    isSelected: false,
  },
];

export const normalizeMobileNumberInput = (value: string) => {
  if (!value) return value;

  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;

  if (cvLength > 10) return `Enter a valid number`;

  if (cvLength < 4) return currentValue;

  if (cvLength < 7)
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
  return `+1 (${currentValue.slice(0, 3)}) ${currentValue.slice(
    3,
    6,
  )}-${currentValue.slice(6, 10)}`;
};

export const SignUpFormTexts = ['Already have an account?', 'Login'];

export const PatientFormChips = [
  'Myself',
  'Mother',
  'Father',
  'Son',
  'Daughter',
  'Others',
];

export const PatientFormRadio = ['Male', 'Female', 'Others'];

export const TIME_SLOT = ['Tue, Feb 23, 2022', '07.00 - 08.00 AM'];

export const VERIFY = 'Verify';

export const StepperLabText = [
  'Lab test',
  'Select appointment',
  'Add address',
  'Review order',
];
export const StepperHomeText = ['Home', 'Covid RTPCR', 'Add patient'];

export const DaySelectorValues = [
  { date: 1, day: 'Mon' },
  { date: 2, day: 'Tue' },
  { date: 3, day: 'Wed' },
  { date: 4, day: 'Thur' },
  { date: 5, day: 'Fri' },
  { date: 6, day: 'Sat' },
  { date: 7, day: 'Sun' },
  { date: 8, day: 'Mon' },
  { date: 9, day: 'Tue' },
  { date: 10, day: 'Wed' },
  { date: 11, day: 'Thur' },
  { date: 12, day: 'Fri' },
  { date: 13, day: 'Sat' },
  { date: 14, day: 'Sun' },
  { date: 15, day: 'Mon' },
  { date: 16, day: 'Tue' },
  { date: 17, day: 'Wed' },
  { date: 18, day: 'Thur' },
  { date: 19, day: 'Fri' },
  { date: 20, day: 'Sat' },
  { date: 21, day: 'Sun' },
  { date: 22, day: 'Mon' },
  { date: 23, day: 'Tue' },
  { date: 24, day: 'Wed' },
  { date: 25, day: 'Thur' },
  { date: 26, day: 'Fri' },
  { date: 27, day: 'Sat' },
  { date: 28, day: 'Sun' },
  { date: 29, day: 'Mon' },
  { date: 30, day: 'Tue' },
  { date: 31, day: 'Wed' },
];

export const PatientFormTexts = [
  'Add Patient Details',
  'Booking for whom',
  'Gender',
  'Save details for future',
];

export const ADDRESS_HEADING = 'Add Address';

export const SignupFormInput = [0, 1, 2];
export const NAV_ITEMS = ['Home', 'Reports', 'My Appointments'];
export const LOCATION = 'Mountain view, CA, USA';
export const PATHS = [
  '/home',
  '/reports',
  '/appointments',
  '/account',
  '/covid',
];

export const APPOINTMENT_HEADING = 'Select Appointment';
export const APPOINTMENT_TIME_RANGE = ['06AM - 12AM', '12 PM - 04 PM'];

export const Package_List = [
  {
    image: 'bodyTest',
    testpackage: 'Full body checkup',
    cost: 1299,
    report_time: 24,
    noOfTest: 42,
  },
  {
    image: 'cardiac',
    testpackage: 'Cardiac Risk Assessment',
    cost: 1299,
    report_time: 24,
    noOfTest: 42,
  },
  {
    image: 'stress',
    testpackage: 'Stress Assessment',
    cost: 1299,
    report_time: 24,
    noOfTest: 42,
  },
];

export const Package_List_Heading = 'Tests You Can Choose From';
export const SetButtonEnable = (length: number) => {
  if (length == 4) {
    return false;
  } else {
    return true;
  }
};

export const fullDays = {
  Sun: 'Sunday',
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thur: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
};
export interface fullDaysProps {
  Sun: string;
  Mon: string;
  Tue: string;
  Wed: string;
  Thur: string;
  Fri: string;
  Sat: string;
}

export const FORMAT_DAY_TIME = (
  day: { date: number; day: string },
  time: string,
  month: string,
) => {
  let format_time = '';
  const DAY = day.day;

  if (
    (Number(time.slice(0, 2)) > 0 && Number(time.slice(0, 2)) < 5) ||
    Number(time.slice(0, 2)) >= 12
  ) {
    format_time = time.slice(0, 5) + 'pm' + time.slice(5) + 'pm';
  } else format_time = time.slice(0, 5) + 'am' + time.slice(5) + 'am';
  return (
    month +
    ' ' +
    day.date +
    ' ,' +
    fullDays[DAY as keyof fullDaysProps] +
    ' ' +
    ',' +
    ' ' +
    format_time
  );
};

export const RECENT_TESTS = [
  'Full Body Checkup',
  '- Los Altos Center Lab',
  'Peter Smith',
  'Fri 18, 7.00 am to 8.00 am',
];

export const APPOINTMENTS = [
  {
    test: 'Covid RTPCR',
    labName: '- Los Altos Center Lab',
    patientName: 'Patrick Smith',
    Date: 'Wed 23, 7.00 am to 8.00 am',
  },
];

export const options = [
  {
    icon: Svg.PayPal,
    value: 'paypal',
    label: 'Pay Pal',
  },
  {
    icon: Svg.GooglePay,
    value: 'googlepay',
    label: 'Google Pay',
  },
  {
    icon: Svg.NetBanking,
    value: 'netbanking',
    label: 'Net Banking',
  },
];

export const PaymentOptionsHeader = 'Other Payment Options';
export const CardPaymentHeader = 'Card Details';
export const ADD_CARD = 'Add Card';
export const APPOINTMENT_PAGE = ['Reports', 'Upcoming Tests', 'Recent Tests'];

export const handleLogout = (
  logout: (options?: LogoutOptions | undefined) => void,
  heading: string,
) => {
  if (heading === 'Logout') {
    logout();
  }
};

export const userDetails = (user: User | undefined) => {
  const details = {
    name: user?.name !== undefined ? user.name : 'No User name',
    email: user?.email !== undefined ? user.email : 'Email Id unavailable',
    phoneNumber:
      user?.phone_number !== undefined ? user.phone_number : '3306173324',
  };
  return details;
};

export const Reports_Text: {
  heading: string;
  upcomingReports: string;
  recentReports: string;
  labname: string;
  testname: string;
} = {
  heading: 'Reports',
  upcomingReports: 'Upcoming Reports',
  recentReports: 'Recent Reports',
  labname: 'Los Altos Center Lab',
  testname: 'COVID RT-PCR Test',
};

export const REPORT_CARD_TEXT = [
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
  },
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
  },
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
  },
];
export const TestInfoOneText =
  'To check if you have an active COVID-19 infection';
export const SearchbarPlaceholderText = 'Search for lab test, packages';

export const HOME_PAGE_CONTENT = [
  'Commonly Booked Test',
  'See more',
  'Frequently Asked Questions',
];

export const FAQs = [
  'How soon can i get the report?',
  'Who needs Full Body Check-up?',
  'Can children can take this test?',
  'How many persons can book appointment through one account?',
];

export const handleChecked = (key: number, e: boolean, id: number[]) => {
  let array = id;
  if (e && !array.includes(key)) array.push(key);
  else if (array.includes(key)) {
    array = array.filter((arr) => arr !== key);
  }
  return array;
};

export const COUNT_FORMATTER = (c: number) => {
  return c < 2 ? `${c} Patient Selected ` : `${c} Patients Selected `;
};

export const TrackOrder = 'Track Your Order';

export const pName = (patientName: PatientProps[], patientId: number) => {
  const pd = patientName.filter(
    (item: PatientProps) => item.patientId === patientId,
  );
  return pd[0].name;
};

export const isEmail = (emailAdress: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
};

export const isAllLetters = (text: string) => {
  const regex = /^[A-Za-z]+$/;

  if (text.match(regex)) return true;
  else return false;
};