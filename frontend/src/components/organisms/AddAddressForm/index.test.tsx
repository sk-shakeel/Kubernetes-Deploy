import {screen,render, fireEvent} from '@testing-library/react'
import React from 'react'
import { AddressForm } from '.'

it('Address card organism should render',async()=>{
    const handleClick = jest.fn()

    render(<AddressForm  testId={'addressForm'} handleChange={handleClick}/>)

    const heading = screen.getByText('Add Address')
    expect(heading).toBeInTheDocument()

    const input = screen.getByLabelText('House/ Flat/ Block No.') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'house' } });
    expect(input.value).toBe('house');

    const testId = screen.getByTestId('addressForm')
    expect(testId).toBeInTheDocument()

    const fun = screen.getAllByRole('textbox')
    expect(fun).toBeCalled;

})