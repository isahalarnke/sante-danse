import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import { Stack, Button, Typography, Box, Snackbar, Dialog, DialogTitle, IconButton } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { getPainEntries, loadDummyData } from '../../../hooks/usePainEntries'
import QrScanner from '../../Components/QrScanner'
import SchmerzGraph from './SchmerzGraph'

const AuswertungStart = () => {
  const navigate = useNavigate()
  const [painEntries, setPainEntries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [openQRDialog, setOpenQRDialog] = useState(false)

  const handleScanSuccess = (data) => {
    console.log('QR erfolgreich:', data)
    setOpenQRDialog(false)
    navigate('/auswertung/qrerfolg')
  }

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
        onClick={() => setOpenQRDialog(true)}
      >
        Med Team Bestätigen
      </PrimaryButton>

      <Dialog
        open={openQRDialog}
        onClose={() => setOpenQRDialog(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          QR-Code scannen
          <IconButton
            aria-label="close"
            onClick={() => setOpenQRDialog(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box sx={{ px: 3, pb: 3 }}>
          <Typography
            variant="body2"
            sx={{ mb: 2, textAlign: 'center', color: 'text.secondary' }}
          >
            Bitte halte den QR-Code vor die Kamera
          </Typography>

          <Box
            sx={{
              position: 'relative',
              width: 250,
              height: 225,
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: '#000',
              mx: 'auto'
            }}
          >
            <QrScanner onScanSuccess={handleScanSuccess} />
          </Box>
        </Box>
      </Dialog>

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
