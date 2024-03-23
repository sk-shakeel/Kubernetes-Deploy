import React from 'react';
import theme from '../../../utils/theme';
import { Box, Grid, styled, Typography } from '@mui/material';
import { Icons } from '../../atoms/Icons';
import { COSTFORMAT, REPORTFORMAT, Svg } from '../../../utils/constants';
export interface RtpcrInfoProps {
  cost: number;
  reportTime: number;
}

const Item = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

const StyledGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #E9E8ED',
  padding: '0px 2px 10px',
  borderRadius: '20px',
  maxWidth: '380px',
  minHeight: '36px',
  position: 'relative',
  top: '20px',
  marginLeft: '2px',
});

const RtpcrInfo = (props: RtpcrInfoProps) => {
  return (
    <StyledGrid container spacing={4} data-testid="rtpcrinfo">
      <Item item>
        <Icons icon={Svg.dollor} width={'20px'} height={'100%'} />
        <Typography
          color={theme.palette.text.primary}
          variant="h5"
          marginLeft={theme.spacing(2)}
        >
          {COSTFORMAT}
          {props.cost}
        </Typography>
      </Item>
      <Item item marginTop={"-3px"}>
        <Icons icon={Svg.testinfo} width={'6px'} height={'6px'} />
      </Item>
      <Item item>
        <Box marginTop="3px">
        <Icons icon={Svg.clock} width={'20px'} height={'100%'} />
        </Box>
        <Typography
          variant="h5"
          color={theme.palette.text.primary}
          marginLeft={theme.spacing(2)}
        >
          {REPORTFORMAT(props.reportTime)}
        </Typography>
      </Item>
    </StyledGrid>
  );
};

export default RtpcrInfo;
