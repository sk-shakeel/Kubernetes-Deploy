import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Reports_Text, REPORT_CARD_TEXT } from '../../../utils/constants';
import { ReportCard } from '../../molecules/ReportCard';

const GridContainer = styled(Grid)({
  width: '100%',
  height: '100%',
  marginTop: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 90px',
  boxSizing: 'border-box'
});

const GridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '40px',
});

const GridItem2 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '26px',
});

const GridItem3 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
});

const ReportsTab = () => {
  return (
    <GridContainer>
      <GridItem>
        <Typography variant="h1" color="text.secondary">
          {Reports_Text.heading}
        </Typography>
      </GridItem>
      <GridItem>
        <Typography variant="subtitle1" color="text.secondary">
          {Reports_Text.upcomingReports}
        </Typography>
      </GridItem>
      <GridItem3>
        <ReportCard
          status={'pending'}
          labName={Reports_Text.labname}
          testName={Reports_Text.testname}
          date={''}
          time={''}
        />
      </GridItem3>
      <GridItem>
        <Typography variant="subtitle1" color="text.secondary">
          {Reports_Text.recentReports}
        </Typography>
      </GridItem>
      <GridItem>
        {REPORT_CARD_TEXT.map((data, key) => {
          return (
            <GridItem2 key={key} data-testid={`reportcard-${key}`}>
              <ReportCard
                status={'completed'}
                labName={data.labName}
                testName={data.testName}
                date={data.date}
                time={data.time}
              />
            </GridItem2>
          );
        })}
      </GridItem>
    </GridContainer>
  );
};

export default ReportsTab;
