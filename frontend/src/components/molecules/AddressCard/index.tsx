import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import RadioButton from '../../atoms/Radiobutton';

export interface AddressProps {
  addressStatusstr?: string,
  addressnameStr?: string
  addressStr ?: string,
  isChecked ?: boolean,
}

export const AddressCard = (props : AddressProps) => {
  return (
    <AddressGrid>
      <ContentDiv>
        <TextBox sx={colorStyle}>
          <Typography variant="overline">{props.addressStatusstr}</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h3" sx={boldStyle}>{props.addressnameStr?.toUpperCase()}</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="caption" sx={colorStyle}>
            {props.addressStr}
          </Typography>
        </TextBox>
      </ContentDiv>
      <RadioBox>
        <RadioButton isChecked={props.isChecked} />
      </RadioBox>
    </AddressGrid>
  );
}

const colorStyle = {
  color : theme.palette.text.secondary,
}

const boldStyle ={fontWeight:"bolder"}

const AddressGrid = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '535px',
  width: "100%" ,
  minHeight: '128px',
  borderRadius: '8px',
  paddingBottom: '12px',
  backgroundColor: theme.palette.grey[800],
  boxShadow:'rgb(233 232 237 / 50%) 0px 0px 26px'
});

const ContentDiv = styled(Box)({
  maxWidth: '258px',
  minHeight: '98px',
  padding: '12px',
  alignContent : "space-between"
});

const TextBox = styled(Box)({
  paddingBottom: '12px',
});

const RadioBox = styled(Box)({
  paddingBottom: '16px',
  paddingRight: '16px',
  paddingTop: '72px'
});
