import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeTemplate } from '.';
import Footer from '../../organisms/Footer';

test('render Home Template', () => {
  render(
    <BrowserRouter>
      <HomeTemplate page={<Footer />} />
    </BrowserRouter>,
  );

  const mainTemp = screen.getByTestId('homeTemplate');
  expect(mainTemp).toBeInTheDocument();
});
