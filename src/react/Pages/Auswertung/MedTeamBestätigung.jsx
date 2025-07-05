import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Box } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import BackButton from '../../Components/Buttons/BackButton'
import QrScanner from '../../Components/QrScanner'

const QRScan = () => {
  const navigate = useNavigate()

  return (
    <>
      <QrScanner
        onScanSuccess={() => {
          console.log('SCAN ERFOLGREICH – gehe zu qrerfolg')
          navigate('/auswertung/qrerfolg')
        }}
      />
      <Box>
        <PrimaryButton
          variant="contained"
          onClick={() => navigate('/auswertung/medteam')}
        >
          Durch Med Team Bestätigen Lassen
        </PrimaryButton>
      </Box>
      <BackButton
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/auswertung')}
      >
        Zurück
      </BackButton>
    </>
  )
}

export default QRScan
