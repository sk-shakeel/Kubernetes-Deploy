import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SignUpForm from '.';

it('SignUp Form shoud render', () => {
  const firstChange = jest.fn();
  const secondChange = jest.fn();
  const emailChange = jest.fn();
  const continueBtnClick = jest.fn();
  render(
    <SignUpForm
      firstNameHandle={firstChange}
      secondNameHandle={secondChange}
      emailNameHandle={emailChange}
      continueBtnHandle={continueBtnClick}
    />,
  );
  const ContainerElement = screen.getByTestId('SignUpFormBox');
  expect(ContainerElement).toBeInTheDocument();
});

it('SignUp Form Input Field FireEvent', () => {
  const firstChange = jest.fn();
  const secondChange = jest.fn();
  const emailChange = jest.fn();
  const continueBtnClick = jest.fn();
  render(
    <SignUpForm
      firstNameHandle={firstChange}
      secondNameHandle={secondChange}
      emailNameHandle={emailChange}
      continueBtnHandle={continueBtnClick}
    />,
  );
  const FirstNameElement = screen.getByPlaceholderText('eg: Patrick');
  fireEvent.change(FirstNameElement, { target: { value: 'Sai' } });
  expect(firstChange).toBeCalled();

  const SecondNameElement = screen.getByPlaceholderText('eg: Smith');
  fireEvent.change(SecondNameElement, { target: { value: 'Srinivas' } });
  expect(secondChange).toBeCalled();

  const EmailElement = screen.getByPlaceholderText(
    'eg: patricksmith@gmail.com',
  );
  fireEvent.change(EmailElement, {
    target: { value: 'SaiSrinivas@gmail.com' },
  });
  expect(emailChange).toBeCalled();

  fireEvent.change(EmailElement, {
    target: { value: '' },
  });
  expect(emailChange).toBeCalled();

  fireEvent.change(EmailElement, {
    target: { value: 'SaiSrinivas@gmail.com' },
  });
  expect(emailChange).toBeCalled();

  const ButtonElement = screen.getByRole("button");
    fireEvent.click(ButtonElement);
    expect(continueBtnClick).toBeCalled();
});
