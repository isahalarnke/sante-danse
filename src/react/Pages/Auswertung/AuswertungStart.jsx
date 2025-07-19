import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
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
  const [scanSuccess, setScanSuccess] = useState(false)

  // Beim ersten Render Einträge laden
  useEffect(() => {
    setPainEntries(getPainEntries())
  }, [])

  const handleScanSuccess = () => {
    setScanSuccess(true)
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  return (
    <Stack sx={{ flex: 1, alignItems: 'center', gap: 3, px: 2, py: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <SchmerzGraph />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Schmerzeinträge:
            {painEntries.length}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            setIsLoading(true)
            setTimeout(() => {
              loadDummyData()
              setPainEntries(getPainEntries())
              setIsLoading(false)
              setShowSnackbar(true)
            }, 500)
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Laden...' : 'Testdaten laden'}
        </Button>
      </Box>

      <PrimaryButton variant="contained" onClick={() => setOpenQRDialog(true)}>
        Med Team Bestätigen
      </PrimaryButton>

      <Dialog
        open={openQRDialog}
        onClose={() => { setOpenQRDialog(false); setScanSuccess(false) }}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            width: '90vw',
            maxWidth: 320,
            borderRadius: 3,
            bgcolor: scanSuccess ? '#e6f9ec' : 'background.paper'
          }
        }}
      >
        <DialogTitle sx={{ pr: 5 }}>
          {scanSuccess ? 'Verifizierung erfolgreich' : 'QR‑Code scannen'}
          <IconButton
            aria-label="close"
            onClick={() => { setOpenQRDialog(false); setScanSuccess(false) }}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box
          sx={{
            px: 3,
            pb: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {!scanSuccess ? (
            <>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                Bitte halte den QR‑Code vor die Kamera.
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: 250,
                  height: 225,
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: '#000'
                }}
              >
                <QrScanner onScanSuccess={handleScanSuccess} />
              </Box>
            </>
          ) : (
            <>
              <CheckCircleIcon sx={{ fontSize: 60, color: 'green', mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Dein Eintrag wurde bestätigt!
              </Typography>
            </>
          )}
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
