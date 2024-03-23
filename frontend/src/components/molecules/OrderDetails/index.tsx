import { Box, Divider, Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../utils/theme';
import {
  CURRENCY_FORMATTER,
  ORDER_DETAILS,
  Svg,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

interface Props {
  patientName?: string;
  testName: string;
  address: string;
  amount: number;
  instructions: string;
  onClick?: () => void;
  testId?: string;
  currency: 'Rupee' | 'Dollar';
}

export const OrderDetails = (props: Props) => {
  const [info, setInfo] = useState<boolean>(false);

  return (
    <OuterBox>
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        alignItems={'space-around'}
      >
        <DetailsGrid item data-testid={props.testId}>
          <Box
            display={'flex'}
            sx={{
              width: '11.5rem',
              paddingTop: theme.spacing(3),
              paddingLeft: theme.spacing(5),
            }}
            justifyContent={'space-between'}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                marginBottom: theme.spacing(2),
              }}
            >
              <Icons icon={Svg.user} height={'22px'} width={'22px'} />
            </Box>
            <Box >
              <Typography variant={'h3'} color={'text.primary'}>
                {props.patientName}
              </Typography>
              <Typography
                variant={'h3'}
                color={'text.disabled'}
                textTransform={'uppercase'}
              >
                {props.testName}
              </Typography>
            </Box>
          </Box>

          <Line />

          <Box sx={{ marginLeft: theme.spacing(3) }}>
            <Typography variant={'caption'} color={'text.secondary'}>
              {props.address}
            </Typography>
            <Typography variant={'h3'} color={'text.secondary'}>
              {CURRENCY_FORMATTER(props.amount,props.currency)}
            </Typography>
          </Box>
        </DetailsGrid>

        <InfoGrid item data-testid={props.testId}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              alignItems={'center'}
              sx={{ width: '8rem'}}
              justifyContent={'space-evenly'}
              display={'flex'}
            >
              <Icons icon={Svg.info} width={'20px'} height={'20px'} />
              <Typography variant={'overline'} color={'#4D1C8C'} sx={{}}>
                {ORDER_DETAILS[5]}
              </Typography>
            </Box>
            <Arrow onClick={() => (info ? setInfo(false) : setInfo(true))}>
              <Icons
                icon={info ? Svg.uparrow : Svg.downarrowthick}
                width={''} height={''} />
            </Arrow>
          </Box>
          {info && (
            <Instructions display={'grid'}>
              <Typography variant={'caption'} color={'text.secondary'}>
                {props.instructions}
              </Typography>
            </Instructions>
          )}
        </InfoGrid>
      </Grid>
    </OuterBox>
  );
};

const OuterBox = styled(Box)({
  maxWidth: '484px',
  width: '100%',
  maxHeight: '272px',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  background: theme.palette.grey[800],
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DetailsGrid = styled(Grid)({
  maxWidth: '434px',
  width: '100%',
  height: '128px',
  display: 'grid',
  alignItems: 'space-between',
  justifyContent: 'flex-start',
  background: theme.palette.grey[800],
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  borderRadius: theme.spacing(2),
});

const InfoGrid = styled(Grid)({
  maxWidth: '434px',
  width: '100%',
  minHeight: '34px',
  height: '100%',
  marginTop: '1rem',
  alignItems:'center',
  background: theme.palette.secondary.light,
  borderRadius: theme.spacing(1),
});

const Line = styled(Divider)({
  width: '90%',
  marginLeft: theme.spacing(3),
  marginBottom:theme.spacing(3)
});

const Arrow = styled(Box)({
  cursor: 'pointer',
  marginTop: theme.spacing(1.3),
  marginRight: theme.spacing(1.2),
});

const Instructions = styled(Box)({
  marginLeft: theme.spacing(3),
  marginBottom: theme.spacing(1),
});
