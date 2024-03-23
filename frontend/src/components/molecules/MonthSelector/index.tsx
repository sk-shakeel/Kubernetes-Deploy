import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Chip from '../../atoms/Chips/index';
import {MonthSelectorValues} from '../../../utils/constants';
import {createGlobalState} from 'react-use'

export const useGlobalMonthSelector = createGlobalState<string>(MonthSelectorValues[0])


function MonthSelector() {
  const [month, setMonth] = useGlobalMonthSelector();

  return (
    <MonthSelectorDiv>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
              display: "none",
          },
        }}
      >
        {MonthSelectorValues.map((value, key: number) => (
          <ChipDiv key={key} data-testid="monthchips">
            <Chip
              text={<Typography variant='overline'>{value}</Typography>}
              testid={'item'}
              style={
                value === month
                  ? selectedTimeChipStyle
                  : unselectedTimeChipStyle
              }
              onclick={() => setMonth(value)
              }
            ></Chip>
          </ChipDiv>
        ))}
      </Tabs>
    </MonthSelectorDiv>
  );
}

export default MonthSelector;

const selectedTimeChipStyle = {
  background: '#9E62B2',
  color: '#FFFFFF',
  width: '142px',
  height: '40px',
  fontWeight: 500,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
};

const unselectedTimeChipStyle = {
  background: '#F8F8FA',
  color: '#757380',
  width: '142px',
  height: '40px',
  fontWeight: 500,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
};

const MonthSelectorDiv = styled(Box)({
  height: '40px',
  width: '566px',
  display: 'flex',
});

const ChipDiv = styled(Box)({
  paddingRight: '22px',
});
