import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import { Svg } from '../../../utils/constants';
import theme from '../../../utils/theme';
import Divider from '@mui/material/Divider';

interface ReviewOrderCardHeaderProps {
  heading: string;
  onClick?: () => void;
  status: boolean;
  component?: JSX.Element;
  icon: Svg;
  testid?: string;
}

const StyledBoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(3),
  boxSizing: 'border-box',
  width: '434px',
  minHeight: '92px',
});

const StyledBox = styled(Box)({
  display: 'flex',
  width:'9rem',
  height:'1.7rem',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const style = {
  height:'1.7rem',
  fontSize: theme.spacing(3),
  lineHeight: theme.spacing(4.5),
  fontWeight: 500,
};

const ReviewOrderCardHeader = (props: ReviewOrderCardHeaderProps) => {
  return (
    <StyledBoxContainer data-testid={props.testid}>
      <Grid
        container
        padding={theme.spacing(2)}
        justifyContent={'space-between'}
        display={'flex'}
      >
        <Grid item display={'flex'} alignItems={'center'}>
          <StyledBox>
            <Icons
              icon={props.icon}
              width={theme.spacing(3)}
              height={theme.spacing(3)}
            />
            <Typography variant="overline" color="info.main">
              {props.heading}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item>
          {props.status && (
            <CustomButton
              variant="text"
              style={style}
              label={'Change'}
              onClick={props.onClick}
            />
          )}
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={3} margin={theme.spacing(0)}>
        {props.component}
      </Grid>
    </StyledBoxContainer>
  );
};

export default ReviewOrderCardHeader;




