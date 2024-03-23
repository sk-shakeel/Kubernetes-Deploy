import React from 'react';
import { render, screen } from '@testing-library/react';
import { Svg } from '../../../utils/constants';
import Index from './index';

it('should icon render',()=>{
        render(<Index image={Svg.appstore}  />)
        const icon = screen.getByAltText('appStore')
        expect(icon).toBeInTheDocument()
})

