import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { ADDRESS_HEADING, ADDRESS_TEXT_FIELDS } from '../../../utils/constants';
import InputField from '../../molecules/Inputfield/index';

interface Props {
  handleChange: (key:number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  testId?: string;
}

export const AddressForm = (props: Props) => {
  return (
    <OuterGrid
      container
      justifyContent={'flex-start'}
      alignItems={'center'}
      direction={'column'}
    >
      <InnerGrid item>
        <Typography fontSize={'20px'} fontWeight={600}>
          {ADDRESS_HEADING}
        </Typography>
      </InnerGrid>
      <TextFields
        item
        justifyContent={'center'}
        alignItems={'center'}
        data-testid={props.testId}
      >
        <Box sx={{ marginTop: '1rem' }}>
          {ADDRESS_TEXT_FIELDS.map((textField, key) => {
            return (
              <MapGrid item key={key}>
                <InputField
                  label={textField.label}
                  placeholder={textField.placeholder}
                  onChange={ (e) => props.handleChange(key,e)}
                  type={key===2 ? "number" : "text"}
                />
              </MapGrid>
            );
          })}
        </Box>
      </TextFields>
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  width: '583px',
  minHeight: '560px',
  paddingLeft: theme.spacing(6),
  paddingTop: theme.spacing(10),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  boxShadow: 'rgb(233 232 237 / 50%) 0px 0px 26px',
});

const TextFields = styled(Grid)({
  display: 'grid',
  maxWidth: '23rem',
  width: '100%',
});

const InnerGrid = styled(Grid)({
  paddingBottom: theme.spacing(6),
  justifyContent: 'flex-start',
  width: '35rem',
});

const MapGrid = styled(Grid)({
  width: '35rem',
  paddingBottom: '1.5rem',
  paddingRight: theme.spacing(9),
});
