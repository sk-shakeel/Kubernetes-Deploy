import { render, screen } from '@testing-library/react';
import React from 'react';
import { AddressCard } from '.';

it('Address Card shoud render', () => {
  render(
    <AddressCard
      addressStatusstr="Default Address"
      addressnameStr="Home"
      addressStr="2235 California Street Mountain View California APT#021 - 11023"
      isChecked={true}
    />,
  );

  const addressElement = screen.getByText('HOME');
  expect(addressElement).toBeInTheDocument();

  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeInTheDocument();
});
