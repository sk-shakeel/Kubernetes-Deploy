import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import Chip from '../../atoms/Chips/index';
import { createGlobalState } from 'react-use';
import { TimeSelectorValues } from '../../../utils/constants';

export let selectedTime = '';

interface TimeSelectorProps {
  timeValues: Array<string>;
  timeHeader: string;
}

export const useGlobalTimeState = createGlobalState<string>(TimeSelectorValues[0][0]);

function TimeSelector(props: TimeSelectorProps) {
  const [time, setTime] = useGlobalTimeState();
  const handleChange = (value: string) => {
    setTime(value);
  };

  selectedTime = time;

  return (
    <TimeSelectorDiv>
      <TextDiv>
        <Typography variant="h3">{props.timeHeader}</Typography>
      </TextDiv>
      <ChipContainerDiv>
        {props.timeValues.map((value, key) => (
          <ChipDiv key={key} data-testid="timechips">
            <Chip
              text={<Typography variant='overline'>{value}</Typography>}
              testid={'time' + key + '-chip'}
              style={
                value === selectedTime
                  ? selectedTimeChipStyle
                  : unselectedTimeChipStyle
              }
              onclick={() => {
                handleChange(value);
              }}
            ></Chip>
          </ChipDiv>
        ))}
      </ChipContainerDiv>
    </TimeSelectorDiv>
  );
}

export default TimeSelector;

const selectedTimeChipStyle = {
  background: '#9E62B2',
  color: theme.palette.grey[800],
  width: '128px',
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
  color: theme.palette.text.disabled,
  width: '128px',
  height: '40px',
  fontWeight: 500,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
};

const TimeSelectorDiv = styled(Box)({
  height: '144px',
  width: '378px',
  display: 'flex',
});

const TextDiv = styled(Box)({
  height: '20px',
  width: '100px',
  paddingRight: '10px',
});

const ChipContainerDiv = styled(Box)({
  height: '144px',
  width: '268px',
  display: 'flex',
  flexWrap: 'wrap',
});

const ChipDiv = styled(Box)({
  width: '50%',
});
