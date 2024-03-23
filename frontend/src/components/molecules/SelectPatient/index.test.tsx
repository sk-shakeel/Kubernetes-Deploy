import React from 'react';
import { render, screen } from '@testing-library/react';
import { SelectPatient } from '.';

describe('Icon', () => {
  test('renders select patient ', () => {
    render(<SelectPatient name="Patrik Smith" details="Self, Male, 30 years" />);
    expect(screen.getByTestId('patient-option')).toBeInTheDocument();
  });
});