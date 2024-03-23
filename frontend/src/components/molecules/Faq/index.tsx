import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import theme from '../../../utils/theme';

export interface FAQProps {
  question: string;
  testid?: string;
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'space-between',
  boxShadow: theme.palette.secondary.light,
});

const Span = styled(Grid)({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent:'flex-end',
  paddingRight:'3rem',
});

function FAQ(props: FAQProps) {
  return (
    <StyledGrid container data-testid={props.testid}>
      <Grid item xs={11} md={11}>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {props.question}
        </Typography>
      </Grid>

      <Span item xs={1} md={1}>
        <KeyboardArrowDownIcon htmlColor={theme.palette.grey[300]} />
      </Span>
    </StyledGrid>
  );
}

export default FAQ;
