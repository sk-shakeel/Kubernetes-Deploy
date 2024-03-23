import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  Svg,
  testimonialHeading,
  TESTIMONIAL_LIST,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import TestimonialCard from '../../molecules/TestimonialCard';

const Testimonials = styled(Grid)({
  display: 'flex',
  width: '100% !important',
  gap: theme.spacing(40),
});

const InnerGrid = styled(Grid)({
  width: '100%',
  marginBottom:'2rem'
});

const Typo = styled(Typography)({
  marginBottom: '4rem',
});

const OuterGrid = {
  px: { md: '90px', sm: '50px' },
  py: '60px',
  bgcolor: theme.palette.primary.dark,
};

const ListOfTestimonialCards = () => {
  return (
    <Grid
      container
      spacing={3}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={OuterGrid}
    >
      <InnerGrid item>
        <Typo data-testid="headingid" variant={'h1'} color="grey.800">
          {testimonialHeading}
        </Typo>
        <Testimonials container>
          {TESTIMONIAL_LIST.map((data, key) => {
            return (
              <Grid item key={key} sm={4} md={3}>
                <TestimonialCard
                  testid="testimonialcardid"
                  customerName={data.customerName}
                  designation={data.designation}
                  testimony={data.testimony}
                  testimonyImg = {data.testimonyImg}
                />
              </Grid>
            );
          })}
        </Testimonials>
      </InnerGrid>
      <Grid item>
        <Icons icon={Svg.progressIndicator} width={''} height={''} />
      </Grid>
    </Grid>
  );
};

export default ListOfTestimonialCards;
