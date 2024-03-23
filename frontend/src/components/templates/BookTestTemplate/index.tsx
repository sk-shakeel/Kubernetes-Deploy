import { Box, Grid, styled } from '@mui/material';
import React from 'react';
import { CompanyLogo } from '../../atoms/Logo';

export interface BookTestTemplateProps {
  stepper: React.ReactNode;
  page: React.ReactNode;
  bottomNav: React.ReactNode;
}

export const GridContainer = styled(Grid)({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const GridItem = styled(Grid)({
  width: '80%',
  height: '80%',
  margin: '30px 0px',
});

export const GridItem2 = styled(Grid)({
  width: '100%',
  height: '100%',
  margin: '15px 0px',
});

export const GridCenterItem = styled(Grid)({
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '15px 0px',
});

const BookTestTemplate = (props: BookTestTemplateProps) => {
  return (
    <Box>
      <GridContainer container data-testid="template">
        <GridItem data-testid="logoid" item>
          <CompanyLogo weight={'700'} />
        </GridItem>
        <GridItem data-testid="stepperid" item>
          {props.stepper}
        </GridItem>
        <GridCenterItem data-testid="organismid" item>
          {props.page}
        </GridCenterItem>
      </GridContainer>
      <GridItem2 data-testid="bottomnav" item>
        {props.bottomNav}
      </GridItem2>
    </Box>
  );
};

export default BookTestTemplate;
