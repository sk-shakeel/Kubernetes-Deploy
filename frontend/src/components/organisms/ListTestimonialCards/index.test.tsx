import { render, screen } from '@testing-library/react';
import ListOfTestimonialCards from '.';
import React from 'react';

test('render ListOfTestimonialCards', () => {
  render(<ListOfTestimonialCards />);

  const cards = screen.getAllByTestId('testimonialcardid');
  expect(cards).toHaveLength(3);

  expect(screen.getByTestId('headingid')).toHaveTextContent(
    'Customer Testimonials',
  );
});
