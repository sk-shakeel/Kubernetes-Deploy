import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  accountDetails,
  formatPhoneNumber,
  Svg,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

interface ProfileInfoProps {
  userName: string;
  userEmail: string;
  userNumber: string;
}

const StyledBoxContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
});

const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <Grid container spacing={3} width="90%" justifyContent={"space-around"}>
      <Grid item xs={10}   >
        <StyledBoxContainer>
          <Icons
            icon={Svg.accountavatar}
            width={theme.spacing(15)}
            height={theme.spacing(15)}
          />
          <StyledBox>
            <Typography
              data-testid="usernameid"
              variant="subtitle1"
              color="text.primary"
            >
              {props.userName}
            </Typography>
            <Typography
              data-testid="useremailid"
              variant="overline"
              color="text.disabled"
              fontWeight={theme.typography.fontWeightRegular}
            >
              {props.userEmail}
            </Typography>
            <Typography
              data-testid="usernumberid"
              variant="overline"
              color="text.disabled"
              fontWeight={theme.typography.fontWeightRegular}
            >
              {formatPhoneNumber(props.userNumber)}
            </Typography>
          </StyledBox>
        </StyledBoxContainer>
      </Grid>
      <Grid item xs={1} md={1} display="flex" alignItems="center">
        <Typography
          variant="caption"
          color="primary"
          fontWeight={theme.typography.fontWeightMedium}
        >
          {accountDetails.editOption}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
