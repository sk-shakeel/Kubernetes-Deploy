import { render, screen } from '@testing-library/react';
import React from 'react';
import LoginTemplate from '.';
import {
  features,
  packageBenifits,
  cost,
  reportTime,
  packagePoints,
} from '../../../utils/constants';
import CovidInfo from '../../organisms/CovidInfo';

test('should render login template', () => {
  render(
    <LoginTemplate
      page={
        <CovidInfo
          features={features}
          packageBenifits={packageBenifits}
          cost={cost}
          reportTime={reportTime}
          packagePoints={packagePoints}
        />
      }
    />,
  );

  expect(screen.getByTestId('template')).toBeInTheDocument();
});
