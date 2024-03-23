import { Grid } from '@mui/material';
import React from 'react';
import { testCardValues } from '../../../utils/constants';
import TestCard from '../../molecules/TestCard';

export interface TestCardProps {
  handleCovid: () => void;
}

function TestCardsList(props: TestCardProps) {
  return (
    <Grid
      container
      data-testid="test-card-list-container"
      sx={GridContainerStyle}
      rowGap={7}
      columnGap={7}
    >
      {testCardValues.map((value, key) => (
        <Grid
          item
          key={key}
          xs={6}
          sm={4}
          md={2.8}
          data-testid={'test' + key}
          sx={GridItemStyle}
        >
          <TestCard
            icon={value.logo}
            testName={value.title}
            onclick={() => {
              key === 1 && props.handleCovid();
            }}
            testid={value.title}
          ></TestCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default TestCardsList;

const GridItemStyle = {
  justifyContent: 'center',
  display: 'flex',
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
};

const GridContainerStyle = {
  paddingBottom: '65px',
};
