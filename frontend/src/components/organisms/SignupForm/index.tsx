import { Box, Stack, styled, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { CompanyLogo } from '../../atoms/Logo/index';
import InputField from '../../molecules/Inputfield/index';
import { CustomButton } from '../../atoms/Button/index';
import { SignupOptions } from '../../molecules/SignupOptions/index';
import {
  SignUpFormTexts,
  SignupFormInput,
  isEmail,
} from '../../../utils/constants';
import theme from '../../../utils/theme';

export interface SignupFormProps {
  firstNameHandle: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  secondNameHandle: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  emailNameHandle: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  continueBtnHandle: () => void;
}

// eslint-disable-next-line prefer-const
let array = [false, false, false];

function SignUpForm(props: SignupFormProps) {
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  const updateFilledInput = (textValue: string,length: number,index: number,) => {
    if (length === 0) {
      array[index] = false;
    } 
    else {
      if (index === 2) {
        array[index] = isEmail(textValue);
      } else {
        array[index] = true;
      }
    }
    if (array[0] && array[1] && array[2]) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  return (
    <SignupFormBox data-testid="SignUpFormBox">
      <SignupFormStack>
        <CenterBox>
          <CompanyLogo weight={'500'} />
        </CenterBox>
        <InputField
          label="First Name"
          placeholder="eg: Patrick"
          onChange={(e) => {
            props.firstNameHandle(e);
            updateFilledInput(e.target.value,e.target.value.length, SignupFormInput[0]);
          }}
          testid="first-name-inputfield"
        />
        <InputField
          label="Last Name"
          placeholder="eg: Smith"
          onChange={(e) => {
            props.secondNameHandle(e);
            updateFilledInput(e.target.value,e.target.value.length, SignupFormInput[1]);
          }}
          testid="last-name-inputfield"
        />
        <InputField
          label="Email id"
          placeholder="eg: patricksmith@gmail.com"
          onChange={(e) => {
            props.emailNameHandle(e);
            updateFilledInput(
              e.target.value,
              e.target.value.length,
              SignupFormInput[2],
            );
          }}
          testid="email-inputfield"
        />
        <CenterBox>
          <CustomButton
            variant="contained"
            label={'Continue'}
            style={continueBtnStyle}
            onClick={props.continueBtnHandle}
            disabled={buttonDisable}
          />
        </CenterBox>
        <CenterBox>
          <Typography variant="caption">{SignUpFormTexts[0]}</Typography>
          <Typography variant="h3" style={loginFontStyle}>
            {SignUpFormTexts[1]}
          </Typography>
        </CenterBox>
        <SignupOptions />
      </SignupFormStack>
    </SignupFormBox>
  );
}

export default SignUpForm;

export const continueBtnStyle = {
  color: '#FAFAFC',
  maxWidth: '334px',
  width: '100%',
  height: '42px',
  fontWeight: 600,
  borderRadius: '8px',
};

export const loginFontStyle = {
  fontWeight: '700',
  marginTop: '-0.1rem',
  paddingLeft: '0.2rem',
};

export const CenterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const SignupFormStack = styled(Stack)({
  minHeight: '520px',
  maxWidth: '358px',
  justifyContent: 'space-evenly',
  padding: '24px',
});

export const SignupFormBox = styled(Box)({
  minHeight: '544px',
  maxWidth: '382px',
  borderRadius: '8px',
  justifyContent: 'space-evenly',
  backgroundColor: theme.palette.grey[800],
});
