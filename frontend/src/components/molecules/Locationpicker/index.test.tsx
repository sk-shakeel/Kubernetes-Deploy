import React from "react"
import { render, screen } from "@testing-library/react";
import { Locationpick } from ".";

it('should icon render',()=>{
        render(<Locationpick text="Mountain view, CA, USA" />)
        const text = screen.getByText('Mountain view, CA, USA')
        expect(text).toBeInTheDocument()
        const icons = screen.getAllByTestId('icon')[0] as HTMLOrSVGElement
        expect(icons).toBeInTheDocument()
})
