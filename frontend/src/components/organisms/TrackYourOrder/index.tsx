import {
  Grid,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '../../../utils/theme';
import { Svg, TrackOrder } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface Events {
  eventName: string;
  icon: Svg;
  tagline: string;
}

export interface TrackYourOrderProps {
  trackOfEvents: Array<Events>;
  activeStep: number;
}

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.contrastText,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.contrastText,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    marginLeft: theme.spacing(5),
    borderRadius: 1,
  },
}));

const IconContainer = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  border: '1px solid grey',
  color: theme.palette.grey[800],
  width: theme.spacing(16),
  height: theme.spacing(16),
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.grey[800],
    borderColor: theme.palette.primary.contrastText,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.contrastText,
  }),
}));

const Label = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(29),
  background: theme.palette.grey[600],
});

const OuterGrid = styled(Grid)({
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  borderRadius: '8px',
  display: 'grid',
});

const Typo = styled(Grid)({
  marginLeft: '3rem',
  marginTop: '3rem',
});

const TrackYouOrder = (props: TrackYourOrderProps) => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setActiveStep(props.activeStep);
  }, [props.activeStep]);

  const stepIcons = (iconprops: StepIconProps) => {
    const { active, completed, className } = iconprops;

    const icon: Array<React.ReactElement> = [
      <Icons key={0} icon={Svg.check} width={'44px'} height={'44px'} />,
    ];

    props.trackOfEvents.forEach((step) => {
      icon.push(<Icons icon={step.icon} width={'44px'} height={'44px'} />);
    });

    return (
      <IconContainer ownerState={{ completed, active }} className={className}>
        {icon[Number(iconprops.icon)]}
      </IconContainer>
    );
  };

  return (
    <OuterGrid container data-testid="stepper">
      <Typo item>
        <Typography variant={'body1'}>{TrackOrder}</Typography>
      </Typo>
      <Grid item sx={{ marginLeft: '3rem', marginTop: '2rem' }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<Connector />}
        >
          {props.trackOfEvents.map((step, index) => {
            return (
              <Step key={step.eventName}>
                <StepLabel
                  StepIconComponent={stepIcons}
                  optional={
                    index === 1 ? (
                      <Label variant="h5" marginTop={theme.spacing(2)}>
                        <Icons
                          icon={Svg.labtechnition}
                          width="20px"
                          height="20px"
                        />
                        {step.tagline}
                      </Label>
                    ) : (
                      <Typography variant="h5">{step.tagline}</Typography>
                    )
                  }
                >
                  <Typography variant="body1">{step.eventName}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
    </OuterGrid>
  );
};

export default TrackYouOrder;
