import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7b61ff'
    },
    secondary: {
      main: '#ffd166'
    },
    background: {
      default: '#fdfcfb',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555'
    }
  },
  shape: {
    borderRadius: 14
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
