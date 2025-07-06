import React from 'react'

import { useNavigate } from 'react-router-dom'

import { ArrowBack as BackIcon } from '@mui/icons-material'
import { Stack } from '@mui/material'

import BackButton from '../../Components/Buttons/BackButton'
import QrScanner from '../../Components/QrScanner'

const QRScan = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <QrScanner
        onScanSuccess={() => {
          console.log('SCAN ERFOLGREICH – gehe zu qrerfolg')
          navigate('/auswertung/qrerfolg')
        }}
      />
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/auswertung')}
        sx={{ mt: 2 }}
      >
        Zurück
      </BackButton>
    </Stack>
  )
}

export default QRScan
