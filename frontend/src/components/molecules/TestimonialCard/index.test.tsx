import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCard from '.';

test('should render Testimonial card', () => {
  render(
    <TestimonialCard
      customerName={'Abby'}
      designation={'San Jose, CA'}
      testimony={
        'Very friendly and professional. Loved the follow-up and progress calls'
      }
    />,
  );

  const customer = screen.getByTestId('customerName');
  const icon = screen.getByTestId('avatar');
  const designation = screen.getByTestId('designation');
  const testimony = screen.getByTestId('testimony');

  expect(customer).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(designation).toBeInTheDocument();
  expect(testimony).toBeInTheDocument();
});
