import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from '.';
import { Svg } from '../../../utils/constants';

test('should render servicecard', () => {
  render(
    <ServiceCard
      icon={Svg.test}
      iconwidth={'20px'}
      iconheight={'20px'}
      serviceName={'test'}
      testid={'service-test'}
    />,
  );
  const service = screen.getByTestId('service-test');
  const test = screen.getByText('test');

  expect(service).toBeInTheDocument();
  expect(test).toBeInTheDocument();
});
