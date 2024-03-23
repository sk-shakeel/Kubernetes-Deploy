import { Box, styled, Typography, StepLabel, Divider } from '@mui/material';
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { CustomButton } from '../../atoms/Button';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import theme from '../../../utils/theme';

interface StepperRequiredProps {
  handleBack: () => void;
}

interface StepperOptionalProps {
  stepper?: boolean | true;
  heading?: string;
  steps?: Array<string>;
  activeStep?: number;
  testid?: 'horizontalStepperid' | string;
}

interface StepperProps extends StepperRequiredProps, StepperOptionalProps {}

const defaultProps: StepperOptionalProps = {
  stepper: true,
  heading: 'Checkout',
  steps: [],
  activeStep: 0,
  testid: 'horizontalStepperid',
};

const CustomStepLabel = styled(StepLabel)({
  '& .MuiStepIcon-root': {
    display: 'none',
  },
});

const StyledBoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
});

const StyledBox = styled(Box)({
  marginTop: '7px',
  width:"80%",
  display:"flex",
  justifyContent:"center"
});

const ConnectDivider = styled(Divider)({
  width:"68px",
  backgroundColor: theme.palette.info.main+" !important",
  borderColor: theme.palette.info.main+" !important"
})

const TestStepper = ({
  steps,
  stepper,
  heading,
  activeStep,
  handleBack,
  testid,
}: StepperProps) => {
  return (
    <StyledBoxContainer
      data-testid={testid}
      justifyContent={stepper ? 'space-between' : 'flex-start'}
    >
      <CustomButton
        startIcon={
          <Icons
            icon={Svg.back}
            height={theme.spacing(6)}
            width={theme.spacing(7.5)}
          />
        }
        variant="text"
        label="Back"
        onClick={handleBack}
        style={{lineHeight:"0px"}}
      />
      {stepper ? (
        <StyledBox>
          <Stepper activeStep={activeStep} data-testid="stepper" connector={<ConnectDivider/>}>
            {steps
              ? steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <CustomStepLabel>
                        <Typography
                          variant={activeStep === index ? 'h6' : 'caption'}
                          sx={{
                            color: `${
                              activeStep === index
                                ? 'text.primary'
                                : 'text.disabled'
                            }`,
                          }}
                        >
                          {label}
                        </Typography>
                      </CustomStepLabel>
                    </Step>
                  );
                })
              : undefined}
          </Stepper>
        </StyledBox>
      ) : (
        <StyledBox marginLeft={theme.spacing(22.5)}>
          <Typography variant="subtitle1" color={theme.palette.text.primary}>
            {heading}
          </Typography>
        </StyledBox>
      )}
    </StyledBoxContainer>
  );
};

TestStepper.defaultProps = defaultProps;

export default TestStepper;
