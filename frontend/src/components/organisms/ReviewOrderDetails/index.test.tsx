import { screen, render } from '@testing-library/react';
import React from 'react';
import { ReviewOrderForm } from '.';


it('review order card should render', async() => {
  render(<ReviewOrderForm testId={'review'} />)

  const testId = screen.getByTestId('reviewOrder');
  expect(testId).toBeInTheDocument();
});
