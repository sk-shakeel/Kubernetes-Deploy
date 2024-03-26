import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './utils/theme';
import '../.storybook/storybook.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddressFormPage from './pages/AddressFormPage';
import SelectAddressPage from './pages/SelectAddressPage';
import OTPVerificationPage from './pages/OtpVerificationPage';
import { AppointmentPage } from './pages/AppointmentsPage';
import { userName } from './utils/constants';
import CovidInfoPage from './pages/CovidInfoPage';
import { SelectPatientPage } from './pages/SelectPatientPage';
import ReviewOrderPage from './pages/ReviewOrderPage';
import TrackOrderPage from './pages/TrackOrderPage';
import PatientFormPage from './pages/PatientFormPage';
import OrderPlacedPage from './pages/OrderPlacedPage';
import MobileNumberVerificationPage from './pages/MobileVerificationPage';
import { useAuth0 } from '@auth0/auth0-react';
import SignUpPage from './pages/SignupPage';
import LabSelectionPage from './pages/LabSelectionPage';
import SelectAppointment from './pages/SetAppointmentDate';
import CheckoutPage from './pages/CheckOutPage';
import ReportsPage from './pages/Reports';
import { HomePage } from './pages/HomePage';
import AccountPage from './pages/AccountPage';

function App() {
  const { isLoading,isAuthenticated, user } = useAuth0();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      {!isAuthenticated && <SignUpPage />}
      {isAuthenticated && 
      (
        <BrowserRouter>
          <Routes>
            <Route path="/addaddress" element={<AddressFormPage />} />
            <Route path="/selectaddress" element={<SelectAddressPage />} />
            <Route
              path="/verify"
              element={<OTPVerificationPage username={userName(user)} />}
            />
           <Route path="/account" element={<AccountPage  />} />

            <Route path="/appointments" element={<AppointmentPage />} />
            <Route path="/covid" element={<CovidInfoPage />} />
            <Route path="/selectpatient" element={<SelectPatientPage />} />
            <Route path="/revieworder" element={<ReviewOrderPage />} />
            <Route path="/trackorder" element={<TrackOrderPage />} />
            <Route path="/orderplaced" element={<OrderPlacedPage />}></Route>
            <Route path="/addpatients" element={<PatientFormPage />}></Route>

            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/selectlab" element={<LabSelectionPage />}></Route>
            <Route path="/setdate" element={<SelectAppointment />}></Route>
            <Route
              path="/"
              element={<MobileNumberVerificationPage />}
            />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/appointment" element={<SelectAppointment />} />
          </Routes>
        </BrowserRouter>
      )} 
    </ThemeProvider>
  );
}

export default App;