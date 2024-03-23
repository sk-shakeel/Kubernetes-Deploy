import { render, screen } from '@testing-library/react';
import ProfileInfo from '.';
import React from 'react';

test('render ProfileInfo', () => {
  render(
    <ProfileInfo
      userName={'Patrick Smith'}
      userEmail={'patricksmith@gmail.com'}
      userNumber={'+1 330-617-3324'}
    />,
  );
  const name = screen.getByTestId('usernameid');
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent('Patrick Smith');

  const email = screen.getByTestId('useremailid');
  expect(email).toBeInTheDocument();
  expect(email).toHaveTextContent('patricksmith@gmail.com');

  const number = screen.getByTestId('usernumberid');
  expect(number).toBeInTheDocument();
});
