import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { serviceText, SERVICE_LIST } from '../../../utils/constants';
import ServiceCard from '../../molecules/ServiceCard';

export const ListOfServices = () => {
  return (
    <Grid container direction={'column'} sx={OuterGrid} >
      <InnerGrid item>
        <Typo variant={'h1'} color="grey.800">
          {serviceText}
        </Typo>
        <Services container justifyContent={'space-around'}>
          {SERVICE_LIST.map((service, index) => {
            return (
              <Grid item key={index} md={3}>
                <ServiceCard
                  icon={service.logo}
                  serviceName={service.name}
                  iconwidth={service.width}
                  iconheight={service.height}
                  testid={'serviceCard'}
                />
              </Grid>
            );
          })}
        </Services>
      </InnerGrid>
    </Grid>
  );
};

const Services = styled(Grid)({
  gap: theme.spacing(5),
});

const InnerGrid = styled(Grid)({
  width: '100%',
});

const Typo = styled(Typography)({
  paddingLeft: '3.4rem',
  paddingBottom: '2rem',
});

const OuterGrid = {
  padding: "60px 30px",
  bgcolor: theme.palette.primary.dark,
  minHeight: theme.spacing(100)
};
