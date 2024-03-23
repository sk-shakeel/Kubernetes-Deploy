import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#6B4DE0',
      light: '#F9F5FA',
      dark: '#4D1C8C',
      contrastText: '#9E62B2',
    },
    secondary: {
      main: '#9E62B3',
      light: '#E9E8ED',
      contrastText: '#757380',
    },
    grey: {
      50: '#F8F8F8',
      100: '#E9E8ED',
      200: '#D4D2D9',
      300: '#9F9DA6',
      500: '#6D6C73',
      600: '#F6F5F7',
      700: '#3C3B40',
      800: '#FFFFFF',
      900: '#F2F5FF',
    },
    success: {
      main: '#4D8066',
      light: '#C6CEF7',
    },
    error: {
      main: '#DA4D4D',
      light: '#FC5C5C',
    },
    text: {
      primary: '#2D2A38',
      secondary: '#5A5766',
      disabled: '#757380',
    },
    info: {
      main: '#757380',
    },
    divider: '#E9E8ED',
  },

  typography: {
    button: {
      textTransform: 'none',
    },

    fontFamily: 'Inter',

    subtitle1: {
      lineHeight: '24px',
      fontSize: '20px',
      fontWeight: 600,
    },
    subtitle2: {
      lineHeight: '16px',
      fontSize: '12px',
      fontWeight: 400,
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    body1: {
      lineHeight: '20px',
      fontSize: '16px',
      fontWeight: 600,
    },
    body2: {
      lineHeight: '20px',
      fontSize: '16px',
      fontWeight: 400,
    },
    h2: {
      lineHeight: '28px',
      fontSize: '24px',
      fontWeight: 400,
    },
    h1: {
      lineHeight: '28px',
      fontSize: '24px',
      fontWeight: 700,
    },
    h4: {
      lineHeight: '28px',
      fontSize: '14px',
      fontWeight: 700,
    },
    h3: {
      lineHeight: '20px',
      fontSize: '14px',
      fontWeight: 500,
    },
    h5: {
      lineHeight: '18px',
      fontSize: '12px',
      fontWeight: 400,
    },
    h6: {
      lineHeight: '20px',
      fontSize: '14px',
      fontWeight: 700,
    },
    overline: {
      lineHeight: '18px',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    allVariants: {
      textTransform: 'none',
    },
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          '& .MuiInput-underline:before': {
            borderBottomColor: 'secondary.light',
          },
          '& .MuiInputLabel-root': {
            fontWeight: 500,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#E9E8ED',
          },
          '& .MuiInput-input': {
            fontWeight: 400,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#9E62B3',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            '&.Mui-disabled': {
              background: '#C6CEF7',
            },
            '&:hover': {
              background: '#6B4DE0',
            },
            background: '#6B4DE0',
          }
        }
      ],
    },
  },
});

export default theme;
