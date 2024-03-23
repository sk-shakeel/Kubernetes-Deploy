import { render, screen } from '@testing-library/react';
import Footer from '.';
import React from 'react';

test('render Footer', () => {
  render(<Footer />);

  const footertext1 = screen.getByText('Home');
  expect(footertext1).toBeInTheDocument();

  const footertext2 = screen.getByText('Contact us');
  expect(footertext2).toBeInTheDocument();

  const footertext3 = screen.getByText('Privacy policy');
  expect(footertext3).toBeInTheDocument();

  const footertext4 = screen.getByText('Terms & conditions');
  expect(footertext4).toBeInTheDocument();
});
