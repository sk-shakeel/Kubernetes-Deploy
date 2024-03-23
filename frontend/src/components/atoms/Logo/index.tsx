import { Box, Typography } from '@mui/material'
import React from 'react'
import { Icons } from '../Icons/index'
import {Svg} from '../../../utils/constants';


interface Props{
    weight:'500' | '700';
    iconColor ?: string
}

export const CompanyLogo = (props:Props) => {
    return (
        <Box sx={{display:'flex'}}>
            <Icons icon={Svg.logo} width={"20px"} height={"20px"} />
            <Typography color= {props.iconColor ? props.iconColor : "primary.main"} variant={"caption"} paddingLeft={"6px"} fontWeight={props.weight} marginTop="3px">
                Zemoso Diagnostics
            </Typography>
        </Box>    
    )
}