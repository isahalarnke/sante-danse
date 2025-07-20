import React, { useState, useEffect } from 'react'
import { Grid, Button, Snackbar, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { getPainEntries, loadDummyData } from '../../../hooks/usePainEntries'
import QrVerifyDialog from './QrVerifyDialog'
import TagesCountdown from './TageCountdown'
import SchmerzGraph from './SchmerzGraph'

const AuswertungStart = () => {
  const [painEntries, setPainEntries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [openQRDialog, setOpenQRDialog] = useState(false)
  const [qrDialogKey, setQrDialogKey] = useState(0)
  const daysLeft = 29

  useEffect(() => {
    setPainEntries(getPainEntries())
  }, [])

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  const openScannerDialog = () => {
    setQrDialogKey(prev => prev + 1)
    setOpenQRDialog(true)
  }

  const closeScannerDialog = () => {
    setOpenQRDialog(false)
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ px: 2, py: 4 }}>
      <Grid item xs={12} md={12}>
        <SchmerzGraph />
      </Grid>

      <Grid item xs={12} md={12}>
        <TagesCountdown daysLeft={daysLeft} />
      </Grid>

      <Grid item xs={12} md={6} display="flex" justifyContent="center">
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

      <Grid item xs={12} display="flex" justifyContent="center">
        <PrimaryButton variant="contained" onClick={openScannerDialog}>
          Med Team Bestätigen
        </PrimaryButton>
      </Grid>

      <QrVerifyDialog
        key={qrDialogKey}
        open={openQRDialog}
        onClose={closeScannerDialog}
      />

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Testdaten erfolgreich geladen!"
      />
    </Grid>
  )
}

export default AuswertungStart
