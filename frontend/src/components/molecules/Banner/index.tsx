import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { BannerText, Svg } from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';

interface Props {
  heading: string;
  description: string;
  image: Svg;
}

export const Banner = (props: Props) => {
  return (
    <OuterGrid container>
      <TextGrid container direction={"column"} xs={3}>
        <Typography variant={'h1'} sx={{ color: 'grey.800' }}>
          {props.heading}
        </Typography>
        <Typography variant={'h3'} sx={{ color: 'grey.800' }}>
          {props.description}
        </Typography>
        <ButtonGrid item>
          <CustomButton label={BannerText[2]} style={style}></CustomButton>
        </ButtonGrid>
      </TextGrid>
      <ImageGrid item xs={2.7} >
        <Icons icon={props.image} width={'269px'} height={'180px'} />
      </ImageGrid>
    </OuterGrid>
  )
}

const OuterGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.dark,
  MaxWidth: '1186px',
  width: '100%',
  minHeight: '206px',
  height: '100%',
  borderRadius: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
}))

const ButtonGrid = styled(Grid)(({ theme }) => ({
  width: '108px',
  height: '32px',
  background: theme.palette.grey[800],
  borderRadius: '8px',
  marginTop: '2rem',
}))

const TextGrid = styled(Grid)({
  display:'flex',
  justifyContent:'center',
  alignItems:'flex-start',
  marginLeft:'3rem',
})

const ImageGrid = styled(Grid)({
  alignItems:'center',
  display:'flex',
  justifyContent:'flex-start',
  minWidth: theme.spacing(75.75)
})

const style = {
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: '600',
  paddingLeft: '0.7rem',
  color: theme.palette.primary.dark,
}
