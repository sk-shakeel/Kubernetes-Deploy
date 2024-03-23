import { Grid, styled } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
export interface LoginTemplateProps {
  page: React.ReactNode;
}

const GridContainer = styled(Grid)({
  backgroundColor: theme.palette.primary.light,
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box'
});

const GridItem = styled(Grid)({
  background: theme.palette.grey[800],
  width: '100%',
  height: 'fit-content',
  maxWidth: theme.spacing(95.5),
  maxHeight: theme.spacing(136),
});

const LoginTemplate = (props: LoginTemplateProps) => {
  return (
    <GridContainer container data-testid="template">
      <GridItem item>{props.page}</GridItem>
    </GridContainer>
  );
};

export default LoginTemplate;
