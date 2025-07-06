import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './Themes/theme'
import AppLayout from './AppLayout'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppLayout />
      {/* <Cat name="Blue" /> */}
    </Router>
  </ThemeProvider>
)
