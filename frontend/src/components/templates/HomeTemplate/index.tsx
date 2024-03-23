import { Grid, styled } from "@mui/material";
import React from "react"
import { Header } from "../../organisms/Header";

interface Props{
    page:React.ReactNode;
}
export const HomeTemplate = (props:Props) =>{
    return(
        <Grid container data-testid={'homeTemplate'}>
            <Grid item>
                <Header />
            </Grid>
            <PageGrid item>{props.page}</PageGrid>
        </Grid>
    )
}

const PageGrid = styled(Grid)({
    marginTop:'3.5rem',
    width:'100%'
})