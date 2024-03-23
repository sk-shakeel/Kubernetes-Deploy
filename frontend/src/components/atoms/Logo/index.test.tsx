import React from "react"
import { render, screen } from "@testing-library/react";
import {CompanyLogo} from "./index"

it('logo should render',()=>{
        render(<CompanyLogo weight={'500'} />)
        const icon = screen.getByTestId('icon')
        expect(icon).toBeInTheDocument()
})