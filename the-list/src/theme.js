import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#048b03',
    },
    secondary: {
      main: '#005EB8',
    },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: "'Nunito', 'Avenir Next Rounded', 'Avenir Next', sans-serif",
    fontSize: 16,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 2,
  },
  spacing: 4,
});

export default theme;
