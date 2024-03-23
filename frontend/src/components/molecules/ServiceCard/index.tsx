import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface ServiceCardProps {
  icon: Svg;
  iconwidth: string;
  iconheight: string;
  serviceName: string;
  testid: string;
}

const GridContainer = styled(Grid)({
  background: theme.palette.grey[800],
  maxWidth: theme.spacing(95.5),
  width:'100%',
  height: theme.spacing(19),
  borderRadius: theme.spacing(2),
});

const IconContainer = styled(Grid)({
  width: theme.spacing(14),
  height: theme.spacing(14),
  borderRadius: '50%',
  background: theme.palette.primary.light,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2.5),
  marginLeft: theme.spacing(5),
});

const ServiceContainer = styled(Grid)({
  marginTop: theme.spacing(7),
  marginLeft: theme.spacing(6),
});

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <GridContainer container data-testid={props.testid}>
      <IconContainer item>
        <Icons
          icon={props.icon}
          width={props.iconwidth}
          height={props.iconheight}
        />
      </IconContainer>
      <ServiceContainer item>
        <Typography variant="h3" color={theme.palette.text.secondary}>
          {props.serviceName}
        </Typography>
      </ServiceContainer>
    </GridContainer>
  );
};

export default ServiceCard;
