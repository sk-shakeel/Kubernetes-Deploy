import { Box, Divider, Grid, styled } from '@mui/material';
import React from 'react';
import { CompanyLogo } from '../../atoms/Logo';
import { GridItem2 } from '../BookTestTemplate';

interface AfterAppointmentProps {
  header?: React.ReactNode;
  leftorganism: React.ReactNode;
  divider?: boolean;
  rightorganism: React.ReactNode;
  bottomNav: React.ReactNode;
  testid?: string;
}

const GridCenterContainerItem = styled(Grid)({
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'space-between',
  justifyContent: 'space-between',
});

const GridContainer = styled(Grid)({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const GridItem = styled(Grid)({
  width: '80%',
  height: '80%',
  margin: '30px',
});

const Line = styled(Divider)({
  border: '1px solid #E9E8ED',
  height: '100%',
  margin: '2rem 6rem 0px 6rem',
});

const AfterAppointmentTemplate = (props: AfterAppointmentProps) => {
  return (
    <Box data-testid={props.testid}>
      <GridContainer container data-testid="template">
        <GridItem data-testid="logoid" item>
          <CompanyLogo weight={'700'} />
        </GridItem>
        <GridItem data-testid="headerid" item>
          {props.header}
        </GridItem>
        <GridCenterContainerItem data-testid="organismid" item>
          <GridItem>{props.leftorganism}</GridItem>
          <Grid item>{props.divider && <Line />}</Grid>
          <GridItem>{props.rightorganism}</GridItem>
        </GridCenterContainerItem>
      </GridContainer>
      <GridItem2 data-testid="bottomnav" item>
        {props.bottomNav}
      </GridItem2>
    </Box>
  );
};

export default AfterAppointmentTemplate;
