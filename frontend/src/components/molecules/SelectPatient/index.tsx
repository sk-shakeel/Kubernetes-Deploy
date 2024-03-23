import React from 'react';
import { Box, Checkbox, Typography, Button } from '@mui/material';
import theme from '../../../utils/theme';

interface SelectPatientProps {
  name: string;
  details: string;
  isChecked?: boolean;
  handleChecked?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
  handleEdit?: () => void;
}
export const SelectPatient = ({
  details,
  name,
  isChecked,
  handleChecked,
  handleEdit,
}: SelectPatientProps) => {
  return (
    <Box
      data-testid="patient-option"
      sx={{
        width: '100%',
        maxWidth: theme.spacing(133.75),
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: theme.spacing(9.5),
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Checkbox
          data-testid={`${name}-checkbox`}
          checked={isChecked}
          onChange={handleChecked}
          disableRipple
          sx={{
            color: theme.palette.grey[200],
            fontSize: theme.spacing(3),
            paddingBottom: theme.spacing(4.35),
          }}
        />
        <Box sx={{ paddingTop: theme.spacing(3) }}>
          <Typography
            sx={{
              paddingLeft: theme.spacing(2.625),
              ...theme.typography.caption,
              fontSize: theme.spacing(3.5),
              lineHeight: '18px',
              color: theme.palette.text.primary,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              paddingLeft: theme.spacing(2.625),
              ...theme.typography.overline,
              lineHeight: '18px',
              fontSize: theme.spacing(3),

              color: theme.palette.text.disabled,
            }}
          >
            {details}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            color: theme.palette.primary.main,
            height: '42px',
            fontWeight: 500,
            fontSize:theme.spacing(4.5),
            borderRadius: '8px',
          }}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};
