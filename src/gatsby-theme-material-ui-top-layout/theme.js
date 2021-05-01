import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#131516',
    },
    background: {
      default: '#191c1e',
    },
    text: {
      primary: '#fff'
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '1.5em'
        },
        '*::-webkit-scrollbar-track': {
          background: "#151819",
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgb(29,32,33)',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgb(39,42,43)',
        }

      }
    }
  }
});

export default theme;