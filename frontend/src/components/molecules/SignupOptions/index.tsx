import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { signup, Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import Divider from '@mui/material/Divider';

const IconGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-evenly',
  maxWidth: '335px',
  width: '100%',
});

const DividerGrid = styled(Divider)({
  width: '100%',
  paddingBottom: '3vh',
});

export const SignupOptions = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <DividerGrid>
          <Typography variant={'subtitle2'} color={'grey.300'}>
            {signup}
          </Typography>
        </DividerGrid>
      </Grid>
      <IconGrid item>
        <Icons icon={Svg.Google} width={'40px'} height={'40px'} />
        <Icons icon={Svg.facebook} width={'40px'} height={'40px'} />
        <Icons icon={Svg.Apple} width={'40px'} height={'40px'} />
      </IconGrid>
    </Grid>
  );
};
