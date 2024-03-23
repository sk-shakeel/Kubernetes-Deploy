import { render, screen } from '@testing-library/react';
import PackageList from '.';
import React from 'react';

test('render PackageList', () => {
  render(<PackageList />);

  const container = screen.getByTestId('listofpackages_container');
  expect(container).toBeInTheDocument();

  for (let i = 0; i < 3; i++) {
    const cards = screen.getByTestId('list_of_packages_' + i);
    expect(cards).toBeInTheDocument();
  }
});
