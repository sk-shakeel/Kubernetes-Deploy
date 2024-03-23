import { render, screen } from '@testing-library/react';
import React from 'react';
import AfterAppointmentTemplate from '.';
import BottomNav from '../../molecules/BottomNav';
import Index from '../../atoms/Images';
import OrderPlaced from '../../molecules/Orderplaced';
import { Svg } from '../../../utils/constants';

test('render TestStepper', () => {
  render(
    <AfterAppointmentTemplate
      leftorganism={
        <Index
          image={Svg.paymentsuccess}
          style={{ height: '436px', width: '391px' }}
        />}
      rightorganism = {<OrderPlaced />}
      bottomNav={<BottomNav label={'Track Your Order'} displayCancel={true}/>}
    />,
  );

  const mainTemp = screen.getByTestId('template');
  expect(mainTemp).toBeInTheDocument();

  const logo = screen.getByTestId('logoid');
  expect(logo).toBeInTheDocument();

  const organism = screen.getByTestId('organismid');
  expect(organism).toBeInTheDocument();

  const bottomnav = screen.getByTestId('bottomnav');
  expect(bottomnav).toBeInTheDocument();
});
