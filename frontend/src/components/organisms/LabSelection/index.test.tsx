import { fireEvent, render, screen } from '@testing-library/react';
import LabSelection from '.';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('render LabSelection', async() => {
  render(
    <BrowserRouter>
      <LabSelection />
    </BrowserRouter>,
  );

  const labs = screen.getAllByTestId('labsid');
  expect(labs).toHaveLength(1);

  const addtest = screen.getByTestId('addtestid');
  fireEvent.click(addtest);

  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(navigate).toBeCalled();

  const div = screen.getByTestId('labcard_box');
  expect(div).toBeInTheDocument();
});
