import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons/index';

interface Locationprops {
  text: string;
}

export const Locationpick = (props: Locationprops) => {
  return (
    <Grid sx={{ borderBottom: '2px solid #D4D2D9', width: 'fit-content',display:'flex',paddingTop:'2px', alignItems:"center"}}>
      <Icons icon={Svg.mappin} width={'50px'} height={'18px'} />
      <Typography
        variant={'caption'}
        fontWeight="500"
        padding="0px 76px 0px 6px"
        color={'text.primary'}
      >
        {props.text}
      </Typography>
      <Icons icon={Svg.downarrowthin} width={'25px'} height={'25px'} />
    </Grid>
  );
};
