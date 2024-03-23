import { Box, styled } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../atoms/Button/index';
import theme from '../../../utils/theme';

export interface BottomNavProps {
  cancelClick?: () => void;
  completeClick?: () => void;
  label: string;
  selectionDetail?: React.ReactNode;
  displayCancel: boolean;
}

const BottomNav = (props: BottomNavProps) => {
  return (
    <BottomDiv data-testid="container">
      {props.displayCancel ? (
        <CancelBtnDiv data-testid="cancelbtn">
          <CustomButton
            label={'Cancel'}
            style={cancelBtnStyle}
            onClick={props.cancelClick}
          />
        </CancelBtnDiv>
      ) : (
        <Box></Box>
      )}
      <CompleteBtnDiv>
        <StyledBox>{props.selectionDetail}</StyledBox>
        <CustomButton
          label={props.label}
          style={completeBtnStyle}
          onClick={props.completeClick}
        />
      </CompleteBtnDiv>
    </BottomDiv>
  );
};

export default BottomNav;

const completeBtnStyle = {
  background: theme.palette.primary.main,
  color: '#FAFAFC',
  width: '222px',
  height: '42px',
  fontWeight: 600,
  borderRadius: '8px',
};

const cancelBtnStyle = {
  color: theme.palette.error.light,
  marginLeft: '90px',
};

const BottomDiv = styled(Box)({
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  backgroundColor: theme.palette.grey[800],
  boxShadow: `0px -4px 6px rgba(0, 0, 0, 0.06)`,
  position: 'fixed',
  bottom: '0px',
});

const CompleteBtnDiv = styled(Box)({
  padding: '14px 90px 14px 0px',
  display: 'flex',
  alignItems: 'center',
});

const StyledBox = styled(Box)({
  padding: '0px 24px',
});

const CancelBtnDiv = styled(Box)({
  padding: '14px 0px 14px 0px',
});
