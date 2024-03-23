import * as React from 'react';
import { render, screen } from '@testing-library/react';
import RtpcrInfo from '.';

test('should render covid test info', () => {
  render(<RtpcrInfo cost={1200} reportTime={24} />);

  expect(screen.getByTestId('rtpcrinfo')).toBeInTheDocument();
  expect(screen.getByText('Starting from $1200')).toBeInTheDocument();
  expect(screen.getByText('Reports ready in 24 Hours')).toBeInTheDocument();
});
