import {screen,render, fireEvent} from '@testing-library/react'
import React from 'react'
import { AddressCardOrg } from '.'

it('Address card organism should render', async()=>{
    render(<AddressCardOrg  testId={'addressgrids'}/>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    const heading = screen.getByText('Select Address')
    expect(heading).toBeInTheDocument()

    const testId = screen.getByTestId('addressgrids')
    expect(testId).toBeInTheDocument()

})

