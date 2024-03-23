import {render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TestCardList from '.';

it('Test Card List shoud render', () => {
  render(
    <TestCardList handleCovid={() => {console.log("handle Covid")}}/>
  );
  const TestCardElements = screen.getByTestId("test-card-list-container");
  expect(TestCardElements.childElementCount).toBe(8);
});

it('Test Card List Click on Covid', () => {
  const handleClick = jest.fn()
    render(
      <TestCardList handleCovid={handleClick}/>
    );
    const CovidTestElements = screen.getAllByTestId('icon')[1];
    fireEvent.click(CovidTestElements);
    expect(handleClick).toBeCalled();
  });

