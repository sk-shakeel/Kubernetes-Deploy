import React from 'react';
import VerifyOtp from '../../components/organisms/VerifyOtp';
import LoginTemplate from '../../components/templates/SignupPageTemplate';


interface OtpVerificationProps {
  username: string;
}

const OTPVerificationPage = (props: OtpVerificationProps) => {
  return <LoginTemplate page={<VerifyOtp username={props.username} />} />;
};

export default OTPVerificationPage;
