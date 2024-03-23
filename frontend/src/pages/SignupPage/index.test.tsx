import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SignUpPage from '.';

test('should render login template', async() => {
  render(<SignUpPage />);

  expect(screen.getByTestId('template')).toBeInTheDocument();

  const FirstNameElement = screen.getByPlaceholderText('eg: Patrick');
  fireEvent.change(FirstNameElement, { target: { value: 'Sai' } });

  const SecondNameElement = screen.getByPlaceholderText('eg: Smith');
  fireEvent.change(SecondNameElement, { target: { value: 'Srinivas' } });

  const EmailElement = screen.getByPlaceholderText(
    'eg: patricksmith@gmail.com',
  );
  fireEvent.change(EmailElement, {
    target: { value: 'SaiSrinivas@gmail.com' },
  });

  fireEvent.change(EmailElement, {
    target: { value: '' },
  });

});
