import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './Themes/theme'
import AppLayout from './AppLayout'
import { loadDummyData, getPainEntries } from '../hooks/usePainEntries'

const container = document.getElementById('app')
const root = createRoot(container)

const AppRoot = () => {
  useEffect(() => {
    // Automatische Dummy-Daten-Ladung, falls noch keine vorhanden
    if (!getPainEntries() || getPainEntries().length === 0) {
      loadDummyData()
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  )
}

root.render(
  <AppRoot />
)
