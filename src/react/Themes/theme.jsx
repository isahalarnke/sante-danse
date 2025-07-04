import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: muiTheme => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          background: muiTheme.palette.background.default,
          color: muiTheme.palette.text.primary,
          fontFamily: muiTheme.typography.fontFamily
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
    }
})

export default theme
