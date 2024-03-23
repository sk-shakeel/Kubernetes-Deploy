import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import {
  MobileVerificationText,
  normalizeMobileNumberInput,
} from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { CompanyLogo } from '../../atoms/Logo';
import InputField from '../../molecules/Inputfield';
import { SignupFormBox } from '../SignupForm';
import theme from '../../../utils/theme';
import { useNavigate } from 'react-router-dom';

export const MobileVerificationStack = styled(Stack)({
  minHeight: '320px',
  maxWidth: '322px',
  justifyContent: 'space-evenly',
  padding: '24px',
});

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  width: '100%',
});

export const CenterBox2 = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '-60px',
});

export const StyledTypo = styled(Typography)({
  paddingTop: theme.spacing(1),
});

export interface MobileVerificationProps {
  userName?: string;
}

const continueBtnStyle = {
  color: '#FAFAFC',
  maxWidth: '334px',
  width: '100%',
  height: '42px',
  fontWeight: 600,
  borderRadius: '8px',
};

const MobileNumberVerification = (props: MobileVerificationProps) => {
  const [number, setNumber] = useState('');
  const [buttonEnable, setButtonEnable] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const formattedNumber = normalizeMobileNumberInput(e.target.value);
    setNumber(formattedNumber);
  };

  useEffect(() => {
    if (number.length <= 12) {
      setButtonEnable(true);
    } else {
      setButtonEnable(false);
    }
  }, [buttonEnable, number.length]);

  const navigate = useNavigate();

  return (
    <SignupFormBox data-testid="mobileVerificationId">
      <MobileVerificationStack>
        <CenterBox2>
          <CompanyLogo weight={'500'} />
        </CenterBox2>
        <StyledBox>
          <Typography variant="body1" color="text.primary">
            {MobileVerificationText.hey}
            {props.userName}
          </Typography>
          <StyledTypo variant="caption" color="text.disabled">
            {MobileVerificationText.heading}
          </StyledTypo>
        </StyledBox>
        <InputField
          label={MobileVerificationText.label}
          placeholder={MobileVerificationText.placeholder}
          onChange={(e) => handleChange(e)}
          value={number}
          testid="mobile-number-inputfield"
        />
      </MobileVerificationStack>
      <CenterBox2>
        <CustomButton
          disabled={buttonEnable}
          variant="contained"
          label={MobileVerificationText.btntext}
          style={continueBtnStyle}
          onClick={() => {
            navigate('/verify');
          }}
        />
      </CenterBox2>
    </SignupFormBox>
  );
};

export default MobileNumberVerification;
