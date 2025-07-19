import React from 'react'

import { useNavigate } from 'react-router-dom'

import { ArrowBack as BackIcon } from '@mui/icons-material'
import { Stack, Box, Typography } from '@mui/material'

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
      <Typography
        variant="subtitle1"
        sx={{ mb: 2, px: 3, textAlign: 'center', color: 'text.secondary' }}
      >
        Bitte halte den QR-Code vor die Kamera, um deine Verifizierung abzuschließen.
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
          mb: 4
        }}
      >
        <QrScanner
          onScanSuccess={() => {
            console.log('SCAN ERFOLGREICH – gehe zu qrerfolg')
            navigate('/auswertung/qrerfolg')
          }}
        />
      </Box>
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
