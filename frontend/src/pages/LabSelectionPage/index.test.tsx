import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LabSelectionPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(
    <BrowserRouter>
      <LabSelectionPage />
    </BrowserRouter>,
  );
});

it('LabSelectionPage render', async() => {

  const labs = screen.getAllByTestId('labsid');
  expect(labs).toHaveLength(1);

  const addtest = screen.getByTestId('addtestid');
  fireEvent.click(addtest);

  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements.length).toBe(4);
  fireEvent.click(buttonElements[0]);
  expect(navigate).toBeCalled();

  fireEvent.click(buttonElements[1]);
  expect(navigate).toBeCalled();

  fireEvent.click(buttonElements[2]);
  expect(navigate).toBeCalled();

  fireEvent.click(buttonElements[3]);
  expect(navigate).toBeCalled();

  const labname = screen.getByTestId('labname_id');
  expect(labname).toBeInTheDocument();
  expect(labname).toHaveTextContent('Los Altos Center Lab');

  const stepper = screen.getByTestId('stepperid')
  expect(stepper).toBeInTheDocument()

});
