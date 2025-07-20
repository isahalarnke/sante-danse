import React, { useState, useEffect } from 'react'
import { Button, Snackbar, Box, Grid2 as Grid } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { getPainEntries, loadDummyData } from '../../../hooks/usePainEntries'
import QrVerifyDialog from './QrVerifyDialog'
import TagesCountdown from './TageCountdown'
import SchmerzGraph from './SchmerzGraph'
import HinweisBox from './HinweisBox'

const AuswertungStart = () => {
  const [painEntries, setPainEntries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [openQRDialog, setOpenQRDialog] = useState(false)
  const [qrDialogKey, setQrDialogKey] = useState(0)
  const [startDate, setStartDate] = useState(() => {
    const saved = localStorage.getItem('countdownStart')
    return saved
      ? new Date(saved)
      : new Date(Date.now() - 20 * 24 * 60 * 60 * 1000)
  })
  const daysLeft = Math.max(
    0,
    30 - Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  )

  useEffect(() => {
    setPainEntries(getPainEntries())
  }, [])

  const handleCloseSnackbar = () => setShowSnackbar(false)
  const openScannerDialog = () => {
    setQrDialogKey(prev => prev + 1)
    setOpenQRDialog(true)
  }
  const closeScannerDialog = () => setOpenQRDialog(false)

  return (
    <Box sx={{ flex: '1 1 auto', width: '100%' }}>
      <Grid container spacing={2} justifyContent="center" sx={{ px: 2, py: 2, mt: 4 }}>
        <Grid size={12}>
          <SchmerzGraph />
        </Grid>

        <Grid size={11}>
          <TagesCountdown daysLeft={daysLeft} />
        </Grid>

        <Grid size={11}>
          <HinweisBox daysLeft={daysLeft} />
        </Grid>

        <Grid size={11} display="flex" justifyContent="center">
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
        </Grid>

        <Grid size={9} display="flex" justifyContent="center">
          <PrimaryButton variant="contained" onClick={openScannerDialog}>
            Bestätigung durch das Medizinische Team starten
          </PrimaryButton>
        </Grid>
      </Grid>

      <QrVerifyDialog
        key={qrDialogKey}
        open={openQRDialog}
        onClose={closeScannerDialog}
        onVerified={() => {
          const now = new Date()
          localStorage.setItem('countdownStart', now.toISOString())
          setStartDate(now)
        }}
      />

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Testdaten erfolgreich geladen!"
      />
    </Box>
  )
}

export default AuswertungStart
