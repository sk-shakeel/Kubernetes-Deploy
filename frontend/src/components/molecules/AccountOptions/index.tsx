import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import theme from '../../../utils/theme';

interface Props {
  heading?: string;
  description?: string;
  icon: Svg;
  onClick?: () => void;
}

export const AccountOptions = (props: Props) => {
  return (
    <OuterGrid container onClick={props.onClick}>
      <LogoGrid container>
        <Grid item>
          <Icons icon={props.icon} width={'22px'} height={'22px'} />
        </Grid>
      </LogoGrid>
      <Grid item xs={10}>
        <Typography variant={'body1'} color={'text.secondary'}>
          {props.heading}
        </Typography>
        <Typography
          variant={'subtitle2'}
          color={'text.disabled'}
          lineHeight={theme.spacing(6)}
        >
          {props.description}
        </Typography>
      </Grid>
      <Grid item>
        <Icons icon={Svg.rightarrow} width={'24px'} height={'24px'} />
      </Grid>
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  justifyContent:'space-between',
  alignItems: 'center',
  maxWidth: '609px',
  width: '100%',
  minHeight: '74px',
  height: '100%',
  background: theme.palette.grey[800],
});
const LogoGrid = styled(Grid)({
  width: '1.8rem',
  height:'1.8rem',
  alignItems:'flex-start',
  justifyContent:'flex-end',
});
