import {fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MonthDaySelector from '.';

it('Month Day Selector shoud render and selecting a day', () => {
  render(
    <MonthDaySelector selectorType="day"/>
  );
  const buttonElements = screen.getAllByTestId("chips");
  expect(buttonElements.length).toBe(31);

  const Day4Element = screen.getByTestId("chip-4");
  fireEvent.click(Day4Element);
  const Day4FiredElement = screen.getByTestId("chip-4");
  expect(Day4FiredElement.style.backgroundColor).toBe("rgb(158, 98, 178)")
});

it('Month Selector selecting a month', () => {
  render(
    <MonthDaySelector selectorType="month"/>
  );
  const buttonElements = screen.getAllByTestId("chips");
  expect(buttonElements.length).toBe(12);

  const Month4Element = screen.getByTestId("chip-4");
  fireEvent.click(Month4Element);
  const Month4FiredElement = screen.getByTestId("chip-4");
  expect(Month4FiredElement.style.backgroundColor).toBe("rgb(158, 98, 178)")
});