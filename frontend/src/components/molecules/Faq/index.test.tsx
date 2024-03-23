import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FAQ from './index';

test('should render faq', () => {
  render(<FAQ question={'question'} testid={'faq'} />);

  const question = screen.getByText('question');
  const faq = screen.getByTestId('faq');
  expect(faq).toBeInTheDocument();
  expect(question).toBeInTheDocument();
});
