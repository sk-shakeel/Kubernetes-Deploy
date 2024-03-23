import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Icons } from '../../atoms/Icons';
import { SearchbarPlaceholderText, Svg } from '../../../utils/constants';
import theme from '../../../utils/theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textStyle: {
    fontWeight: 'normal',
    fontSize: `${theme.spacing(4)} !important`,
    lineHeight: `${theme.spacing(5)} !important`,
    padding: '10px !important',
  },
});

const Searchbar = () => {
  const classes = useStyles();
  return (
    <TextField
      id="searchField"
      data-testid="textfield"
      placeholder={SearchbarPlaceholderText}
      sx={{ width: '100%' }}
      InputProps={{
        startAdornment: (
          <InputAdornment role="searchicon" position="start">
            <Icons
              icon={Svg.search}
              width={theme.spacing(3.75)}
              height={theme.spacing(3.75)}
            />
          </InputAdornment>
        ),
        classes: {
          input: classes.textStyle,
        },
      }}
    ></TextField>
  );
};

export default Searchbar;
