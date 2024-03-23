import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Chip from '../../atoms/Chips/index';
import {
  MonthSelectorValues,
  DaySelectorValues,
} from '../../../utils/constants';
import { createGlobalState } from 'react-use';

export interface MonthDaySelectorProps {
  selectorType: 'day' | 'month';
}

export const useGlobalMonthDayState = createGlobalState<number>(0);

function MonthDaySelector(props: MonthDaySelectorProps) {
  const day = 'day';

  const selector = props.selectorType === day;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectString = (value: any) => {
    if (selector && typeof value !== 'string')
      return (
        <Stack>
          <Typography variant="caption">{value?.day}</Typography>
          <Typography variant="body1" style={dateStyle}>
            {value?.date}
          </Typography>
        </Stack>
      );
    else return <Typography variant='overline'>{value}</Typography>;
  };

  const selectedChipStyle = {
    background: '#9E62B2',
    color: '#FFFFFF',
    width: selector ? '65px' : '142px',
    height: selector ? '76px' : '40px',
    fontWeight: 500,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  };

  const unselectedChipStyle = {
    background: '#F8F8FA',
    color: '#757380',
    width: selector ? '65px' : '142px',
    height: selector ? '76px' : '40px',
    fontWeight: 500,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  };

  const MonthDaySelectorDiv = styled(Box)({
    height: selector ? '76px' : '40px',
    width: '566px',
    display: 'flex',
  });

  const SelectorValues = selector ? DaySelectorValues : MonthSelectorValues;

  const [chipvalue, setChipValue] = useGlobalMonthDayState();

  const handleChange = (key: number) => {
    setChipValue(key);
  };

  return (
    <MonthDaySelectorDiv>
      <Tabs
        value={chipvalue}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
      >
        {SelectorValues.map((value, key: number) => (
          <ChipDiv key={key} data-testid="chips">
            <Chip
              text={selectString(value)}
              testid={'chip-' + key}
              style={
                key === chipvalue ? selectedChipStyle : unselectedChipStyle
              }
              onclick={() => handleChange(key)}
            ></Chip>
          </ChipDiv>
        ))}
      </Tabs>
    </MonthDaySelectorDiv>
  );
}

export default MonthDaySelector;

const ChipDiv = styled(Box)({
  paddingRight: '22px',
});

const dateStyle = {
  marginLeft: '0.5vh',
};
