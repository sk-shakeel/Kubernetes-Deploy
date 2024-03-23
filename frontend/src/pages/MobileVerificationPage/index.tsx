import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import MobileNumberVerification from '../../components/organisms/MobileVerification';
import LoginTemplate from '../../components/templates/SignupPageTemplate';
import { userName } from '../../utils/constants';

const MobileNumberVerificationPage = () => {
  const {user} =useAuth0();
  return (
    <LoginTemplate page={<MobileNumberVerification userName={userName(user)} />} />
  );
};

export default MobileNumberVerificationPage;
