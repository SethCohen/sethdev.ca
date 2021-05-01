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
          width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(19,21,22,1)',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgb(39,42,43)',
        }

      }
    }
  }
});

export default theme;