import {render, screen } from '@testing-library/react';
import React from 'react';
import MonthSelector from '.';

it('Month Selector shoud render', () => {
  render(
    <MonthSelector/>
  );
  const buttonElements = screen.getAllByTestId("monthchips");
  expect(buttonElements.length).toBe(12);
});
