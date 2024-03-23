import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginTemplate from '../../components/templates/SignupPageTemplate';
import SignUpForm from '../../components/organisms/SignupForm';

function SignUpPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginTemplate
      page={
        <SignUpForm
          firstNameHandle={(e) => {
            console.log(e.target.value);
          }}
          secondNameHandle={(e) => {
            console.log(e.target.value);
          }}
          emailNameHandle={(e) => {
            console.log(e.target.value);
          }}
          continueBtnHandle={() => loginWithRedirect()}
        />
      }
    />
  );
}

export default SignUpPage;
