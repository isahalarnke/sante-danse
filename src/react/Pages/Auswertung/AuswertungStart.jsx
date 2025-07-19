import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Button, Typography, Box, Snackbar } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { getPainEntries, loadDummyData } from '../../../hooks/usePainEntries'
import SchmerzGraph from './SchmerzGraph'

const AuswertungStart = () => {
  const navigate = useNavigate()
  const [painEntries, setPainEntries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(() => {
    setPainEntries(getPainEntries())
  }, [])

  const handleLoadDummyData = () => {
    setIsLoading(true)
    setTimeout(() => {
      loadDummyData()
      setPainEntries(getPainEntries())
      setIsLoading(false)
      setShowSnackbar(true)
    }, 500)
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  return (
    <Stack
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 3,
        px: 2,
        py: 4
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <SchmerzGraph />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Schmerzeinträge:
          {' '}
          {painEntries.length}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleLoadDummyData}
          disabled={isLoading}
        >
          {isLoading ? 'Laden...' : 'Testdaten laden'}
        </Button>
      </Box>

      <PrimaryButton
        variant="contained"
        onClick={() => navigate('/auswertung/medteam')}
      >
        Med Team Bestätigen
      </PrimaryButton>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Testdaten erfolgreich geladen!"
      />
    </Stack>
  )
}

export default AuswertungStart
