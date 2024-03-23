import { render, screen } from '@testing-library/react';
import React from 'react';
import { Banner } from '.';
import { BannerText, Svg } from '../../../utils/constants';

it('Banner items should render', () => {
  render(<Banner heading={BannerText[0]} description={BannerText[1]} image={Svg.Family} />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Book now');

  const image = screen.getByTestId('icon');
  expect(image).toBeInTheDocument();

  const textHeading = screen.getByText('60% off on your first order');
  expect(textHeading).toBeInTheDocument();

  const text = screen.getByText('Your health is our priority');
  expect(text).toBeInTheDocument();
});
